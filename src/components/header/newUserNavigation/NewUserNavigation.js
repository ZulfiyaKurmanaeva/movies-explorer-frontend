import React from 'react';
import {useNavigate } from 'react-router-dom';
import './NewUserNavigation.css';

function NewUserNavigation () {    
const navigateNewUser = useNavigate();

const signin = () => {
    navigateNewUser('/signup');
};
const login = () => {
    navigateNewUser('/signin');
};
	return (
        <div className='header-buttons'>
            <button onClick={signin} type='button' className='header-buttons__button header-buttons__button_type_signin'>Регистрация</button>
            <button onClick={login} type='button' className='header-buttons__button header-buttons__button_type_login'>Войти</button>
          </div>
	);
}

export default NewUserNavigation;