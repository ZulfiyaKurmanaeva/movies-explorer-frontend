import LoggedInUserContext from "../../contexts/LoggedInUserContext";
import './Register.css'
import logo from '../../images/header__logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import {useContext, useState} from "react";
import {login, register} from "../../utils/MainApi";
import {EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN, NAME_ERROR_PATTERN, EMAIL_ERROR_PATTERN} from '../../utils/constants';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const nameValid = () => name.match(NAME_PATTERN) && name.length >= 2;
  const emailValid = () => email.toLowerCase().match(EMAIL_PATTERN);
  const passwordValid = () => password.match(PASSWORD_PATTERN) && password.length >= 4;
  const [, setLoggedIn] = useContext(LoggedInUserContext);
      
  return (
      <main>
          <section className='register'>
              <div className='register__header'>
                  <Link to='/'><img className='register__logo' alt='логотип' src={logo}/></Link>
                  <h1 className='register__title'>Добро пожаловать!</h1>
              </div>
              <div className='register__data'>
                  <form className='register__form'
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                await register(name, email, password);
                                const result = await login(email, password);
                                setLoggedIn(true);
                                localStorage.setItem("jwt", result.token);
                                navigate('/movies');
                            } catch (e) {
                                console.log(e)
                                setError(true);
                            }
                        }}>
                      <label className='register__label'>Имя</label>
                      <input className='register__input' type="text" placeholder='Виталий' 
                             maxLength="20" value={name} onChange={e => setName(e.target.value)} />
                      {!(nameValid()) && <span className='register__input-error'>{NAME_ERROR_PATTERN}</span>}
                      <label className='register__label'>E-mail</label>
                      <input className='register__input' type="email" placeholder='pochta@yandex.ru'
                             maxLength="30" value={email} onChange={e => setEmail(e.target.value)} />
                      {!(emailValid()) &&
                          <span className='register__input-error'>{EMAIL_ERROR_PATTERN}</span>}
                      <label className='register__label'>Пароль</label>
                      <input className='register__input register__input-password' type="password" placeholder='*********'
                             value={password} onChange={e => setPassword(e.target.value)} />
                      {!(passwordValid()) &&
                          <span className='register__input-error'>Пароль не должен быть пустым</span>}
                      {error && <span className='register__input-error'>Что-то пошло не так...</span>}
                      <button type='submit'
                              className='register__submit-button' disabled={!(emailValid()) || !(nameValid()) || !(passwordValid())}>Зарегистрироваться
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
