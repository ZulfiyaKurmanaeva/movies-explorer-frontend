import './Profile.css'
import Header from '../header/Header';
import {useNavigate } from 'react-router-dom';

function Profile() {
  const logoutNavigate = useNavigate();

  const logout = () => {
    logoutNavigate('/');
}; 

    return (
    <>
      <Header />
      <main>   
      <section className='profile'>
        <div className='profile__container'>     
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__info">
           <label className="profile__input-title">Имя</label>
           <input className='profile__input-field' type='text' required minLength="2" maxLength="40" placeholder='Виталий' />
          </div>
          <div className="profile__info">
            <label className="profile__input-title">E-mail</label>
            <input className="profile__input-field" type='email' required placeholder='pochta@yandex.ru' />
          </div>
          <button type='button' className="profile__button profile__button_type_edit">Редактировать</button>
          <button onClick={logout} type='button' className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
        </form>
        </div>       
      </section>
      </main>     
    </>
  )
}

export default Profile;