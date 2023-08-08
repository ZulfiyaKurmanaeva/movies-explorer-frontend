import './Profile.css'
import Header from '../header/Header';
import {useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import {getUser, userEdit} from "../../utils/MainApi";

function Profile() {
    const logoutNavigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        logoutNavigate('/');
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const nameValid = () => name.match(/^[a-zA-Zа-яА-я0-9 ]+$/) && name.length >= 2;
    const emailValid = () => email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    useEffect(() => {
        getUser().then(user => {
            setName(user.name);
            setEmail(user.email);
        })
    }, []);

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
                            console.log(e);
                            setError(true);
                        }
                    }}>
                        <div className="profile__info">
                            <label className="profile__input-title">Имя</label>
                            <input className='profile__input-field' type='text' required minLength="2" maxLength="40"
                                   placeholder='Виталий' value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        {!(nameValid()) && <span className='register__input-error'>Имя может содержать только буквы, цифры и пробел (не менее 2-х символов)</span>}
                        <div className="profile__info">
                            <label className="profile__input-title">E-mail</label>
                            <input className="profile__input-field" type='email' required
                                   placeholder='pochta@yandex.ru'
                                   value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        {!(emailValid()) &&
                            <span className='register__input-error'>Введите корректный адрес электронной почты</span>}
                        {error && <span className='register__input-error'>Что-то пошло не так...</span>}
                        <button type='submit' className="profile__button profile__button_type_edit"
                                disabled={!(emailValid()) || !(nameValid())}>Редактировать
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
