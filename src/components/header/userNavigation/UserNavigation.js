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
  <div className='user-navbar'>
    <nav className='user-navbar__links'>      
      <NavLink to='/movies' className={location.pathname === '/movies' ? 'user-navbar__link user-navbar__link_type_active' : 'user-navbar__link'}>Фильмы</NavLink>
      <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'user-navbar__link user-navbar__link_type_active' : 'user-navbar__link'}>Сохранённые фильмы</NavLink>
    </nav>
    <div>
    <div className='user-navbar__profile-button'>
    <Link to='/profile' className='user-navbar__profile-link'><p className='user-navbar__profile-name'>Аккаунт</p></Link>
    </div>
    <button onClick={handleBurger} className='user-navbar__burger-button' type='button'></button>
    <Burger isOpened={isBurgerOpened} closeBurger={handleBurger} />
    </div>
</div>
	);
}

export default UserNavigation;
