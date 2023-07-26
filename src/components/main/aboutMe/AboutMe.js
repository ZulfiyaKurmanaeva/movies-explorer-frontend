import React from 'react';
import './AboutMe.css';
import avatar from '../../../images/vit__avatar.png';

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__info">
          <div className="aboutMe__text-container">
            <h3 className="aboutMe__name">Виталий</h3>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className="aboutMe__link" href="https://github.com/ZulfiyaKurmanaeva" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="aboutMe__avatar-pic" src={avatar} alt="мое фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
