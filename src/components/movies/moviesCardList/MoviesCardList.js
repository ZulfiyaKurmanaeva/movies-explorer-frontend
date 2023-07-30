import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

export default function MoviesCardList({isSavedMovies}) {
  return (
    <>
     <section className="movies">
      <div className="movies__container">
       <ul className="movies__list">
        <MoviesCard isSavedMovies={isSavedMovies}/>
       </ul>
      </div>
      <div  className={isSavedMovies? 'movies__add movies__add_type_invisible' : 'movies__add'}>
        <button type='button' className="movies__add-button">Еще</button>
       </div>
     </section>
    </>
  );
}