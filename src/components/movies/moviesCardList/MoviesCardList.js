import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

export default function MoviesCardList({isSavedMovies}) {
  return (
    <>
     <section className="movies">
       <ul className="movies__container">
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
        <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
       </ul>
       <div  className={isSavedMovies? 'movies__add_type_invisible' : 'movies__add'}>
        <button type='button' className="movies__button">Еще</button>
       </div>
     </section>
    </>
  );
}