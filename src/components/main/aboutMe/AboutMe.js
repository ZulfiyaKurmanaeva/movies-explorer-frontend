import React from 'react';
import './AboutMe.css';
import avatar from '../../../images/vit__avatar.png';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__legend">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className="about-me__link" href="https://dzen.ru/" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__avatar" src={avatar} alt="мое фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
