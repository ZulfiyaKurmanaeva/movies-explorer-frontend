import './Register.css'
import logo from '../../images/header__logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const temporaryNavigate = useNavigate();

  const temporaryLogin = () => {
  temporaryNavigate('/movies');
};

  return (
    <main>
      <section className='register'>
        <div className='register__container'>
        <div className='register__header'>
          <Link to='/'><img className='register__logo' alt='логотип' src={logo} /></Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
        </div>
        <div className='register__data'>
          <form className='register__form' >
            <label className='register__label'>Имя</label>
            <input className='register__input' required type="text" placeholder='Виталий' minLength="2" maxLength="40" />       
            <label className='register__label'>E-mail</label>
            <input className='register__input' required type="email" placeholder='pochta@yandex.ru' />            
            <label className='register__label'>Пароль</label>
            <input className='register__input register__input-password' required type="password" minLength="6" maxLength="16" placeholder='* * * * * * * * *'/>
            <span className='register__input-error'>Что-то пошло не так...</span>         
            <button onClick={temporaryLogin} type='button'  className='register__submit-button'>Зарегистрироваться</button>
          </form>
          <div className='register__correction'>
            <p className='register__correction-text'>Уже зарегистрированы?</p>
            <Link to='/signin' className='register__link-signin'>Войти</Link>
          </div>
        </div>
        </div>
      </section>
    </main >
  )
}
export default Register;