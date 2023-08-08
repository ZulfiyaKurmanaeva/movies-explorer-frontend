import React from 'react';

import './SearchForm.css';

import Checkbox from '../Checkbox/Checkbox';

function SearchForm({short, setShort, name, setName}) {
    return (
        <section className='search'>            
                <form className='search__form'>
                    <div className='search__input-container'>
                    <input className='search__input' type='text' placeholder='Фильм' minLength="2" maxLength="40"
                           value={name} onChange={e => setName(e.target.value)} required/>
                    <button className='search__button' type='submit'></button>                    
                    </div>
                    <Checkbox short={short} setShort={setShort}/>                   
                </form>      
        </section>
    );
}

export default SearchForm;
