import Header from '../../header/Header';
import SearchForm from '../searchForm/SearchForm'
import MoviesCardList from '../moviesCardList/MoviesCardList'
import Footer from '../../footer/Footer'

function SavedMovies({ isloggedIn, isSavedMovies }) {

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMovies={true}/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
