import './MoviesCard.css'
import React, {useEffect, useState} from 'react';
import {deleteSavedMovie, getSavedMovies, saveMovie} from "../../../utils/MainApi";

export default function MoviesCard({isSavedMovies, movies, updatetMovies}) {
    const [savedMovies, setSavedMovies] = useState([]);
    useEffect(() => {
        getSavedMovies().then(setSavedMovies);
    }, []);
    return (
        <>
            {movies.map((movie, i) => (
                <li className="movie-card" key={i}>
                        <img className="movie-card__image" src={movie.image}
                             alt={`${movie.nameRU}`} onClick={() => window.open(movie.trailerLink, "_blank")}/>
                        <div className="movie-card__description">
                            <div>
                                <h1 className="movie-card__title">{movie.nameRU}</h1>
                                <p className="movie-card__duration">
                                    {(movie.duration > 60 ? Math.floor(movie.duration / 60) + " ч. " : "") + movie.duration % 60 + " мин."}</p>
                            </div>
                            <button type='button'
                                    className={isSavedMovies ? 'movie-card__remove' : (
                                        'movie-card__like ' + (savedMovies.some(x => x.movieId === movie.movieId) ? 'movie-card__like_active' : ''))}
                                    onClick={async e => {
                                        e.preventDefault();
                                        if (isSavedMovies || savedMovies.some(x => x.movieId === movie.movieId)) {
                                            await deleteMv(movie)
                                        } else {
                                            await saveMovie(movie);
                                        }
                                        setTimeout(() => {
                                            getSavedMovies().then(setSavedMovies);
                                            updatetMovies();
                                        }, 200);
                                    }}></button>
                        </div>
                </li>
            ))}
        </>
    );
    
    
    async function deleteMv(movie){
        const id = savedMovies.find(x => x.movieId === movie.movieId)._id;
        await deleteSavedMovie(id);
    }
}

/*export default function MoviesCard({isSavedMovies})

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
}*/