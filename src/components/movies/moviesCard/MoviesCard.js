import './MoviesCard.css'
import React from 'react';
import moviePic from '../../../images/BookSellers_pic.png';

export default function MoviesCard({isSavedMovies}) {
   
  // в дальнейшем будет добавлено переключение лайка
  return (
       <div className="moviesCard">
       <img src={moviePic} alt="постер" />
      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Книготорговцы</h2>
          <p className="moviesCard__duration">1ч 37м</p>
        </div>
        <button type='button' className={isSavedMovies?' moviesCard__remove' : 'moviesCard__like moviesCard__like_active'}></button>
      </div>     
    </div>
   
  );
}