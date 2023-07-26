import React from 'react';

import './Checkbox.css';

function Checkbox () {
    return (        
        <div className='checkbox'>
            <input className='checkbox__input' type='checkbox'></input>        
        <p className='checkbox__text'>Короткометражки</p>
        </div>       
    );
}

export default Checkbox;