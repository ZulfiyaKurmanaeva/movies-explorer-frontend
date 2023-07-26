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
        <div className='buttons__container'>
            <button onClick={signin} type='button' className='button button_type_signin'>Регистрация</button>
            <button onClick={login} type='button' className='button button_type_login'>Войти</button>
          </div>
	);
}

export default NewUserNavigation;