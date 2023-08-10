import './Profile.css'
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import {userEdit } from "../../utils/MainApi";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LoggedInUserContext from '../../contexts/LoggedInUserContext';
import {EMAIL_PATTERN, NAME_PATTERN, NAME_ERROR_PATTERN, EMAIL_ERROR_PATTERN} from '../../utils/constants';

function Profile() {
    const navigate = useNavigate();
    const logoutNavigate = useNavigate();
    const [, setToken] = useContext(LoggedInUserContext);

    const logout = () => {
        setToken(undefined);
        logoutNavigate('/');
    };

    const [user, setUser] = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [ok, setOk] = useState(false);
    const [block, setBlock] = useState(false);
    const nameValid = () => name.match(NAME_PATTERN) && name.length >= 2;
    const emailValid = () => email.toLowerCase().match(EMAIL_PATTERN);
    useEffect(() => {
        setName(user.name ?? "");
        setEmail(user.email ?? "");
    }, [user])


    return (
        <>
            <Header />
            <main>
                <section className='profile'>
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form className="profile__form" onSubmit={async e => {
                        setBlock(true);
                        e.preventDefault();
                        try {
                            await userEdit(name, email);
                            setOk(true);
                            setUser({ name: name, email: email })
                            setTimeout(() => navigate('/movies'), 1000);
                        } catch (e) {
                            setError(true);
                        }
                        setBlock(false);
                    }}>
                        <div className="profile__info">
                            <label className="profile__input-title">Имя</label>
                            <input className='profile__input-field' type='text' required minLength="2" maxLength="40"
                                placeholder='Ваше имя' value={name} onChange={e => { setName(e.target.value); setOk(false) }} />
                        </div>
                        {!(nameValid()) && <span className='register__input-error'>{NAME_ERROR_PATTERN}</span>}
                        <div className="profile__info">
                            <label className="profile__input-title">E-mail</label>
                            <input className="profile__input-field" type='email' required
                                placeholder='pochta@pochta.ru'
                                value={email} onChange={e => { setEmail(e.target.value); setOk(false) }} />
                        </div>
                        {!(emailValid()) &&
                            <span className='register__input-error'>{EMAIL_ERROR_PATTERN}</span>}
                        {error && <span className='register__input-error'>Что-то пошло не так...</span>}
                        {(ok) && <span className='register__input-ok'>Сохранено</span>}
                        <button type='submit' className="profile__button profile__button_type_edit"
                            disabled={!(emailValid()) || !(nameValid()) || name === user.name && email === user.email || block || ok}>Редактировать
                        </button>
                        <button onClick={logout} type='button' className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile;
