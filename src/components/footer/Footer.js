import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__container">
      <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <nav className='footer__links'>
          <Link to="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer" >Яндекс.Практикум</Link>
          <Link to="https://dzen.ru/" className="footer__link" target="_blank" rel="noreferrer">Github</Link>
        </nav>
      </div>
      </div>
    </footer>
  )
}

export default Footer;
