import {useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

import LoggedInUserContext from "../../contexts/LoggedInUserContext";

import {login, register} from "../../utils/MainApi";
import {EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN, NAME_ERROR_PATTERN, EMAIL_ERROR_PATTERN} from '../../utils/constants';

import logo from '../../images/header__logo.svg';

import './Register.css'

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  const nameValid = () => name === undefined || (name.match(NAME_PATTERN) && name.length >= 2);
  const emailValid = () => email === undefined || email.toLowerCase().match(EMAIL_PATTERN);
  const passwordValid = () => password === undefined || (password.match(PASSWORD_PATTERN) && password.length >= 4);
  const [, setToken] = useContext(LoggedInUserContext);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
        await register(name, email, password);
        const result = await login(email, password);
        setError(false);
        setOk(true);
        setToken(result.token);
        setTimeout(() => navigate('/movies'), 2000);
    } catch (e) {
        console.log(e)
        setError(true);
    }
   }
      
  return (
      <main>
          <section className='register'>
              <div className='register__header'>
                  <Link to='/'><img className='register__logo' alt='логотип' src={logo}/></Link>
                  <h1 className='register__title'>Добро пожаловать!</h1>
              </div>
              <div className='register__data'>
                  <form className='register__form'
                        onSubmit={handleRegisterSubmit}>
                      <label className='register__label'>Имя</label>
                      <input className='register__input' type="text" placeholder='Виталий' 
                             maxLength="20" value={name} onChange={e => setName(e.target.value)} />
                      {!(nameValid()) && <span className='register__input-error'>{NAME_ERROR_PATTERN}</span>}
                      <label className='register__label'>E-mail</label>
                      <input className='register__input' type="email" placeholder='pochta@pochta.ru'
                             maxLength="30" value={email} onChange={e => setEmail(e.target.value)} />
                      {!(emailValid()) &&
                          <span className='register__input-error'>{EMAIL_ERROR_PATTERN}</span>}
                      <label className='register__label'>Пароль</label>
                      <input className='register__input register__input-password' type="password" placeholder='*********'
                             value={password} onChange={e => setPassword(e.target.value)} />
                      {!(passwordValid()) &&
                          <span className='register__input-error'>Пароль не должен быть пустым</span>}
                      {error && <span className='register__input-error'>Проверьте вводимые данные</span>}
                      {ok && <span className='register__input-ok'>Вы зарегистрированы</span>}
                      <button type='submit'
                              className='register__submit-button'
                              disabled={!(emailValid()) || !(nameValid()) || !(passwordValid())
                              || name === undefined || password === undefined || email === undefined}>
                              Зарегистрироваться
                      </button>
                  </form>
                  <div className='register__correction'>
                      <p className='register__correction-text'>Уже зарегистрированы?</p>
                      <Link to='/signin' className='register__link-signin'>Войти</Link>
                  </div>
              </div>
          </section>
      </main>
  )
}
  
export default Register;
