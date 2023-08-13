import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <div className="project__description">
          <div className="project__info">
            <h3 className="project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="project__info">
            <h3 className="project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="project__duration">
          <div className="project__back">
            <p className="project__weeks project__weeks_type_green">1 неделя</p>
            <p className="project__weeks-name">Back-end</p>
          </div>
          <div className="project__front">
            <p className="project__weeks project__weeks_type_gray">4 недели</p>
            <p className="project__weeks-name">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
