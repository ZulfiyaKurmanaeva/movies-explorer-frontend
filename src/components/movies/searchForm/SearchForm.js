import React from 'react';

import './SearchForm.css';

import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
    return (
        <section className='search'>            
                <form className='search__form'>
                    <div className='search__input-container'>
                    <input className='search__input' type='text' placeholder='Фильм' required></input>
                    <button className='search__button' type='submit'></button>
                    <div className='search__line'></div>
                    </div>
                    <Checkbox />                   
                </form>      
        </section>
    );
}

export default SearchForm;