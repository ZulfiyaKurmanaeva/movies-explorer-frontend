import './Profile.css'
import Header from '../header/Header';
import {useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState} from "react";
import {getUser, userEdit} from "../../utils/MainApi";
import {EMAIL_PATTERN, NAME_PATTERN, NAME_ERROR_PATTERN, EMAIL_ERROR_PATTERN} from '../../utils/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LoggedInUserContext from '../../contexts/LoggedInUserContext';

function Profile() {
    const logoutNavigate = useNavigate();
    const [, setToken] = useContext(LoggedInUserContext);

    const logout = () => {
        setToken(undefined);
        logoutNavigate('/');
    };

    const user = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const nameValid = () => name.match(NAME_PATTERN) && name.length >= 2;
    const emailValid = () => email.toLowerCase().match(EMAIL_PATTERN);

    useEffect(() => {
            setName(user.name?? "");
            setEmail(user.email?? "");
        })
    
    return (
        <>
            <Header/>
            <main>
                <section className='profile'>
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form className="profile__form" onSubmit={async e => {
                        e.preventDefault();
                        try {
                            await userEdit(name, email);
                        } catch(e) {
                            setError(true);
                        }
                    }}>
                        <div className="profile__info">
                            <label className="profile__input-title">Имя</label>
                            <input className='profile__input-field' type='text' required minLength="2" maxLength="40"
                                   placeholder='Виталий' value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        {!(nameValid()) && <span className='register__input-error'>{NAME_ERROR_PATTERN}</span>}
                        <div className="profile__info">
                            <label className="profile__input-title">E-mail</label>
                            <input className="profile__input-field" type='email' required
                                   placeholder='pochta@yandex.ru'
                                   value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        {!(emailValid()) &&
                            <span className='register__input-error'>{EMAIL_ERROR_PATTERN}</span>}
                        {error && <span className='register__input-error'>Что-то пошло не так...</span>}
                        <button type='submit' className="profile__button profile__button_type_edit"
                                disabled={!(emailValid()) || !(nameValid())|| name === user.name && email === user.email}>Редактировать
                        </button>
                        <button onClick={logout} type='button'
                                className="profile__button profile__button_type_logout">Выйти из аккаунта
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile;
