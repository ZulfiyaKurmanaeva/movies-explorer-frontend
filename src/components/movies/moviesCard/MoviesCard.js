import './MoviesCard.css'
import React from 'react';
import moviesDataBase from '../../utils/constants'

export default function MoviesCard({isSavedMovies})

{  return (
 <>
    {moviesDataBase.map((movie, i) => (
      <li className="movie-card" key={i} >       
       <img className="movie-card__image" src={movie.link} alt={`${movie.title}`} />
       <div className="movie-card__description">
        <div>
          <h1 className="movie-card__title">{movie.title}</h1>
          <p className="movie-card__duration">{movie.duration}</p>
        </div>
         <button type='button' className={isSavedMovies? 'movie-card__remove' : 'movie-card__like movie-card__like_active'}></button>
       </div>     
      </li>
   ))}
</>
  );
}