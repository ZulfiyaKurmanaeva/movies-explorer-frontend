import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

export default function MoviesCardList({isSavedMovies}) {
  return (
    <>
     <section className="moviesCardList">
       <ul className="moviesCardList__container">
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
       <div  className={isSavedMovies? 'moviesCardList__add_invisible' : 'moviesCardList__add'}>
        <button type='button' className="moviesCardList__button">Еще</button>
       </div>
     </section>
    </>
  );
}