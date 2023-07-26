import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Burger from '../burger/Burger';
import './UserNavigation.css';

function UserNavigation () {
  const location = useLocation();
  
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  
  function handleBurger() {
      setIsBurgerOpened(!isBurgerOpened);
    }

	return (
  <div className='navbar__container'>
		<nav>
      <div className='movies__navbar'>
      <NavLink to='/movies' className={location.pathname === '/movies' ? 'movies__link movies__link_type_active' : 'movies__link'}>Фильмы</NavLink>
      <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'movies__link movies__link_type_active' : 'movies__link'}>Сохранённые фильмы</NavLink>
      </div>
    </nav>
     <Link to='/profile' className='profile-link'><p className='profile-name'>Аккаунт</p></Link>
    <button onClick={handleBurger} className='burger__button' type='button'></button>
<Burger isOpened={isBurgerOpened} closeBurger={handleBurger} />
</div>
	);
}

export default UserNavigation;
