import './MoviesCardList.css'
import Preloader from "../../Preloader/Preloader";
import { useContext } from 'react';
import MoviesContext from '../../../contexts/MoviesContext';
import MoviesCard from '../moviesCard/MoviesCard';

export default function MoviesCardList({ isSavedMovies }) {
    const context = useContext(MoviesContext)
    return context.shown === undefined || context.total === undefined || context.saved === undefined
        ? <Preloader />
        : context.error
            ? <div style={{ color: "red", textAlign: "center" }}>Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div>
            : <section className="movies">
                <div className="movies__container">
                    {context.shown.length === 0
                        ? <div style={{ textAlign: "center" }}>Ничего не найдено</div>
                        : <ul className="movies__list">
                            {context.shown.map((movie, i) => <MoviesCard key={i} movie={movie} isSavedMovies={isSavedMovies} ctx={context} />)}
                        </ul>
                    }
                </div>
                <div className={!context.canShowMore || isSavedMovies ? 'movies__add movies__add_type_invisible' : 'movies__add'}>
                    <button type='button' className="movies__add-button" onClick={() => context.showMore()}>Еще</button>
                </div>
            </section>;
}
