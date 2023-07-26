import './Burger.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Burger({ isOpened, closeBurger }) {
  const location = useLocation();
  const main = location.pathname === '/';
  const movies = location.pathname === '/movies';
  const savedMovies = location.pathname === '/saved-movies';

  return (
    <>
      {isOpened && <div className="burger__overlay" onClick={closeBurger}></div>}
      <div className={isOpened ? 'burger__container' : 'burger__container_type_hidden'}>
        <button onClick={closeBurger} className='burger__close-button' type='button'></button>
        <nav className='burger__navbar'>
          <NavLink to='/' className={main? 'burger-link burger-link_type_active' : 'burger-link'}>Главная</NavLink>
          <NavLink to='/movies' className={movies? 'burger-link burger-link_type_active' : 'burger-link'}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={savedMovies? 'burger-link burger-link_type_active' : 'burger-link'}>Сохраненые фильмы</NavLink>
        </nav>
        <Link to='/profile' className='burger__profile-link'>          
          <p className='burger__profile-name'>Аккаунт</p>
        </Link>
      </div>
    </>
  );
}

export default Burger;