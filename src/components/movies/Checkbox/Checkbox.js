import React from 'react';

import './Checkbox.css';

function Checkbox ({short, setShort}) {
    return (        
        <div className='checkbox'>
         <input className='checkbox__input' type='checkbox' checked={short} onChange={e => setShort(e.target.checked)}/>        
         <p className='checkbox__text'>Короткометражки</p>
        </div>       
    );
}

export default Checkbox;
