import './MoviesCard.css'
import React from 'react';
import moviePic from '../../../images/BookSellers_pic.png';

export default function MoviesCard({isSavedMovies}) {
   
  // в дальнейшем будет добавлено переключение лайка
  return (
       <div className="movie-card">
       <img className="movie-card__image" src={moviePic} alt="постер" />
      <div className="movie-card__description">
        <div>
          <h2 className="movie-card__title">Книготорговцы</h2>
          <p className="movie-card__duration">1ч 37м</p>
        </div>
        <button type='button' className={isSavedMovies? 'movie-card__remove' : 'movie-card__like movie-card__like_active'}></button>
      </div>     
    </div>
   
  );
}