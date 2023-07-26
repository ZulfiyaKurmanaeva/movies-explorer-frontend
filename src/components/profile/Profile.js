import './Profile.css'
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Profile() {  

    return (
    <>
      <Header />
      <section className='profile'>
        <div className='profile__container'>     
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__info">
            <p className="profile__input" id='name-input' name='name' type='text' minLength="2" maxLength="40" required>Имя</p>
            <p className="profile__input">Виталий</p>
          </div>
          <div className="profile__info">
            <p className="profile__input">E-mail</p>
            <p className="profile__input">pochta@yandex.ru</p>
          </div>
        </form>
        <button className="profile__button">Редактировать</button>
        <Link to='/' className="profile__button profile__button_type_logout">Выйти из аккаунта</Link>
        </div>       
      </section>
    </>
  )
}

export default Profile;