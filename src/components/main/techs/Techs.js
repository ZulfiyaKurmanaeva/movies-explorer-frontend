import './Techs.css';

function Techs() {

  return (
    <section className="techs">
      <div className='techs__container'>
        <h2 className='techs__header'>Технологии</h2>
        <div className='techs__info'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__items'>
            <li><p className='techs__item'>HTML</p></li>
            <li><p className='techs__item'>CSS</p></li>
            <li><p className='techs__item'>JS</p></li>
            <li><p className='techs__item'>React</p></li>
            <li><p className='techs__item'>Git</p></li>
            <li><p className='techs__item'>Express.js</p></li>
            <li><p className='techs__item'>mongoDB</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;