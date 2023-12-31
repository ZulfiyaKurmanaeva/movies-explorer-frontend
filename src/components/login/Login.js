import {useContext, useState} from "react";
import { Link } from 'react-router-dom';

import {login} from "../../utils/MainApi";

import LoggedInUserContext from "../../contexts/LoggedInUserContext";

import logo from '../../images/header__logo.svg';

import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [ , setToken] = useContext(LoggedInUserContext);
    const [block, setBlock] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setBlock(true);
        try {
            console.log(email, password)
            const result = await login(email, password);
            setToken(result.token);                            
        } catch {
            setError(true);
        }
        setBlock(false);
       };
    
    return (
        <main>
            <section className='login'>
                <div className='login__header'>
                    <Link to='/'><img className='login__logo' alt='логотип' src={logo}/></Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <div className='login__data'>
                    <form className='login__form' onSubmit={handleLoginSubmit}>
                        <label className='login__label'>E-mail</label>
                        <input className='login__input' type="email" placeholder='pochta@pochta.ru' minLength="2"
                               maxLength="20" value={email} onChange={e => setEmail(e.target.value)} required/>
                        <label className='login__label'>Пароль</label>
                        <input className='login__input' type="password" placeholder='пароль' maxLength="20"
                        value={password} onChange={e => setPassword(e.target.value)} required/>
                        {error && <span className='register__input-error'>Неправильная почта или пароль</span>}
                        <button type='submit' className='login__submit-button' disabled={email === "" || password === "" || block}>Войти</button>
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
       