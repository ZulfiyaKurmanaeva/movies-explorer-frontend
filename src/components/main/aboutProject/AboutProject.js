import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__description">
          <div className="aboutProject__info">
            <h3 className="aboutProject__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__info">
            <h3 className="aboutProject__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="aboutProject__duration">
          <div className="aboutProject__back">
            <p className="aboutProject__weeks aboutProject__weeks_green">1 неделя</p>
            <p className="aboutProject__weeks-name">Back-end</p>
          </div>
          <div className="aboutProject__front">
            <p className="aboutProject__weeks aboutProject__weeks_gray">4 недели</p>
            <p className="aboutProject__weeks-name">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
