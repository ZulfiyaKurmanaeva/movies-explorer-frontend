import { useContext } from 'react';
import './MoviesCard.css'
import MoviesContext from '../../../contexts/MoviesContext';

export default function MoviesCard({movie, isSavedMovies }) {
    const cardContext = useContext(MoviesContext);
    return (
    <li className="movie-card">
        <img className="movie-card__image" src={movie.image} alt={`${movie.nameRU}`} onClick={() => window.open(movie.trailerLink, "_blank")}/>
            <div className="movie-card__description">
                <div>
                    <h1 className="movie-card__title">{movie.nameRU}</h1>
                    <p className="movie-card__duration">{(movie.duration > 60 ? Math.floor(movie.duration / 60) + " ч. " : "") + movie.duration % 60 + " мин."}</p>
                </div>
                {isSavedMovies
                ? <button type='button'
                    className={'movie-card__remove'}
                    onClick={() => cardContext.delete(movie)}></button>
                : cardContext.saved === undefined || cardContext.saved.every(mov => mov.movieId !== movie.movieId)
                    ? <button type='button'
                        className={'movie-card__like'}
                        onClick={() => cardContext.save(movie)}></button>
                    : <button type='button'
                        className={'movie-card__like movie-card__like_active'}
                        onClick={() => cardContext.delete(movie)}></button>}
            </div>
    </li>            
    )
 }
