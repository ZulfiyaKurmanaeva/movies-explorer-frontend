import React from "react";
import './Header.css'
import logo from '../../images/header__logo.svg';
import {Link, useLocation} from 'react-router-dom';
import UserNavigation from './userNavigation/UserNavigation';
import NewUserNavigation from './newUserNavigation/NewUserNavigation';

function Header() {
  const location = useLocation();

  return (
   <header className={'header ' + (location.pathname === '/' ? "header_type_blue" : "")}>
      <div className='header__container'>
          <Link to='/' className='header__logo-link' ><img src={logo} className='header__logo' alt='логотип'/></Link>
          { localStorage.getItem("jwt") === null ? <NewUserNavigation/> : <UserNavigation/>}
          </div>     
      </header >
    )
}

export default Header;

/*function Header() {
  const location = useLocation();

  const unauthorizedHader = () => {
    return location.pathname === '/';
  };

  const authorizedHeader = () => {    
    return (
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile"
    );
  };  

  return (
    <>
    {unauthorizedHader() && (<header className='header header_type_blue'>
      <div className='header__container'>
          <Link to='/' className='header__logo-link' ><img src={logo} className='header__logo' alt='логотип'/></Link>
          <NewUserNavigation />
          </div>
      </header>)}

      {authorizedHeader() && (<header className='header'>
      <div className='header__container'>
          <Link to='/' className='header__logo-link' > <img src={logo} className='header__logo' alt='логотип'/></Link>
          <UserNavigation />
          </div>       
      </header >)}
      </>
  )
}

export default Header;*/