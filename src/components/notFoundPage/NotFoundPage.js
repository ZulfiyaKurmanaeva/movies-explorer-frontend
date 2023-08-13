import { useNavigate } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

    return (
      <main>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>        
        <button type='button' onClick={ handleReturn } className='not-found__button'>Назад</button>
      </section>
      </main>   
  );
}

export default NotFoundPage;