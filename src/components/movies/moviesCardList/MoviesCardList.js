import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';

export default function MoviesCardList({isSavedMovies}) {
  return (
    <>
     <section className="moviesCardList">
       <div className="moviesCardList__container">
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
        <MoviesCard isSavedMovies={isSavedMovies}/>
       </div>
       <div  className={isSavedMovies? 'moviesCardList__add_invisible' : 'moviesCardList__add'}>
        <button className="moviesCardList__button">Еще</button>
       </div>
     </section>
    </>
  );
}