import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/header__logo.svg';
import {login} from "../../utils/MainApi";
import {useContext, useState} from "react";
import LoggedInUserContext from "../../contexts/LoggedInUserContext";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loggedIn, setToken] = useContext(LoggedInUserContext);
    
    return (
        <main>
            <section className='login'>
                <div className='login__header'>
                    <Link to='/'><img className='login__logo' alt='логотип' src={logo}/></Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <div className='login__data'>
                    <form className='login__form' onSubmit={async e => {
                        e.preventDefault();
                        try {
                            console.log(email, password)
                            const result = await login(email, password);
                            setToken(result.token);                            
                        } catch {
                            setError(true);
                        }
                    }}>
                        <label className='login__label'>E-mail</label>
                        <input className='login__input' type="email" placeholder='pochta@pochta.ru' minLength="2"
                               maxLength="20" value={email} onChange={e => setEmail(e.target.value)} required/>
                        <label className='login__label'>Пароль</label>
                        <input className='login__input' type="password" placeholder='пароль' minLength="2"
                               maxLength="20" value={password} onChange={e => setPassword(e.target.value)} required/>
                        {error && <span className='register__input-error'>Неправильная почта или пароль</span>}
                        <button type='submit' className='login__submit-button'>Войти</button>
                    </form>
                    <div className='login__correction'>
                        <p className='login__correction-text'>Ещё не зарегистрированы?</p>
                        <Link to='/signup' className='login__link-signup'>Регистрация</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;
