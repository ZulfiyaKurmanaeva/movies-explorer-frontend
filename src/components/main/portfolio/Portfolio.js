import './Portfolio.css'
import linkArrow from '../../../images/link-arrow.svg'
import { Link } from 'react-router-dom';

function Portfolio() {

  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav>
        <ul className='portfolio__links'>
          <li><Link to='https://dzen.ru/' target="_blank" rel="noreferrer" className='portfolio__link'>
            Статичный сайт<img className='portfolio__icon' src={linkArrow} alt="стрелка"/></Link></li>
          <li><Link to='https://dzen.ru/' target="_blank" rel="noreferrer" className='portfolio__link'>
            <span>Адаптивный сайт</span>
            <img className='portfolio__icon' src={linkArrow} alt="стрелка"/>
          </Link></li>
          <li><Link to='https://dzen.ru/' target="_blank" rel="noreferrer" className='portfolio__link portfolio__link_type_last'>
            <span>Одностраничное приложение</span>
            <img className='portfolio__icon' src={linkArrow} alt="стрелка"/>
          </Link></li>
        </ul>
      </nav>
      </div>
    </section>
  )
}

export default Portfolio;