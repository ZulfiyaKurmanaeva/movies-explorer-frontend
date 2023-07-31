import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/header__logo.svg';

function Login() {

  const temporaryNavigate = useNavigate();

  const temporaryLogin = () => {
  temporaryNavigate('/movies');
};

  return (
    <main>
      <section className='login'>
        <div className='login__container'>
        <div className='login__header'>
          <Link to='/'><img className='login__logo' alt='логотип' src={logo} /></Link>
          <h1 className='login__title'>Рады видеть!</h1>
        </div>
        <div className='login__data'>
          <form className='login__form' >
            <label className='login__label'>E-mail</label>
            <input className='login__input' type="email" placeholder='pochta@yandex.ru' minLength="2" maxLength="20" required />            
            <label className='login__label'>Пароль</label>
            <input className='login__input' type="password" placeholder='пароль' minLength="2" maxLength="20" required />            
            <button onClick={temporaryLogin} type='button' className='login__submit-button'>Войти</button>
          </form>
          <div className='login__correction'>
            <p className='login__correction-text'>Ещё не зарегистрированы?</p>
            <Link to='/signup' className='login__link-signup'>Регистрация</Link>
          </div>
        </div>
        </div>
      </section>
    </main >
  )
}

export default Login;