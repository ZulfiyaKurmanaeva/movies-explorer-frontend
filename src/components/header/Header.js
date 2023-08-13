import React from "react";
import {Link, useLocation} from 'react-router-dom';

import UserNavigation from './userNavigation/UserNavigation';
import NewUserNavigation from './newUserNavigation/NewUserNavigation';

import logo from '../../images/header__logo.svg';

import './Header.css'


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
