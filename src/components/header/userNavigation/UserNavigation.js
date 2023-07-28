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
  <div className='navbar'>
		<nav>
      <div className='navbar__links'>
      <NavLink to='/movies' className={location.pathname === '/movies' ? 'navbar__link navbar__link_type_active' : 'navbar__link'}>Фильмы</NavLink>
      <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'navbar__link navbar__link_type_active' : 'movies-navbar__link'}>Сохранённые фильмы</NavLink>
      </div>
    </nav>
     <Link to='/profile' className='navbar__profile-link'><p className='navbar__profile-name'>Аккаунт</p></Link>
    <button onClick={handleBurger} className='navbar__burger-button' type='button'></button>
<Burger isOpened={isBurgerOpened} closeBurger={handleBurger} />
</div>
	);
}

export default UserNavigation;
