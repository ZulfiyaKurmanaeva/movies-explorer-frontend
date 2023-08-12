import { useContext } from 'react';

import Preloader from "../../Preloader/Preloader";
import MoviesContext from '../../../contexts/MoviesContext';

import MoviesCard from '../moviesCard/MoviesCard';
import './MoviesCardList.css'

export default function MoviesCardList({ isSavedMovies }) {
    const cardListContext = useContext(MoviesContext)
    return cardListContext.shown === undefined || cardListContext.total === undefined || cardListContext.saved === undefined
        ? <Preloader />
        : cardListContext.error
            ? <div  className="movies__search-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div>
            : <section className="movies">
                <div className="movies__container">
                    {cardListContext.shown.length === 0
                        ? 
                        cardListContext.name === ""
                        ? <></>
                        : <div className="movies__not-found">Ничего не найдено</div>
                        : <ul className="movies__list">
                            {cardListContext.shown.map((movie) => <MoviesCard key={movie.movieId} movie={movie} isSavedMovies={isSavedMovies} />)}
                        </ul>
                    }
                </div>
                <div className={!cardListContext.canShowMore || isSavedMovies ? 'movies__add movies__add_type_invisible' : 'movies__add'}>
                    <button type='button' className="movies__add-button" onClick={() => cardListContext.showMore()}>Еще</button>
                </div>
            </section>;
}