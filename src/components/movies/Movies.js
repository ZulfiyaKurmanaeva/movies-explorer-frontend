import Header from '../header/Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../footer/Footer'
import { useEffect, useState } from "react";
import { getAllMovies } from '../../utils/MoviesApi';
import { deleteSavedMovie, getSavedMovies, saveMovie } from '../../utils/MainApi';
import MoviesContext from '../../contexts/MoviesContext';

function Movies({ isSaved }) {
    const shortCached = localStorage.getItem("short");
    const nameCached = localStorage.getItem("name");
    const totalCached = localStorage.getItem("total");
    const [short, setShort] = useState(isSaved || shortCached === null ? false : shortCached === "true");
    const [name, setName] = useState(isSaved ? "" : nameCached ?? "");
    const [count, setCount] = useState(initialMoviesCount());
    const [total, setTotal] = useState(totalCached === null ? undefined : JSON.parse(totalCached));
    const [shown, setShown] = useState();
    const [saved, setSaved] = useState();
    const [canShowMore, setCanShowMore] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (total === undefined) {
            getAllMovies().then(mov => mov.map(mapExternalMovie)).then(totalMov => {
                setTotal(totalMov);
                localStorage.setItem("total", JSON.stringify(totalMov))
            }).catch(setError);
        }
        if (saved === undefined) {
            getSavedMovies().then(setSaved).catch(setError);
        }
    }, []);
    useEffect(() => {
        if (isSaved) {
            setShort(false);
            setName("");
        } else {
            setShort(shortCached === "true");
            setName(nameCached ?? "");
        }
    }, [isSaved])

    useEffect(() => {
        if (total !== undefined && saved !== undefined) {
            const filtered = (isSaved ? saved : total)
                .filter(mov => (short ? mov.duration <= 52 : true) && mov.nameRU.toLowerCase().includes(name.toLowerCase()));
            if ((filtered.length <= count) || isSaved) {
                setCanShowMore(false);
                setShown(filtered);
            } else {
                setCanShowMore(true);
                setShown(filtered.slice(0, isSaved ? total.length : count));
            }
        }
    }, [total, saved, count, isSaved, short, name]);


    const context = {
        total: total,
        shown: shown,
        saved: saved,
        canShowMore: canShowMore,
        error: error,
        showMore: () => { setCount(count => count + addedMoviesCount()) },
        save: card => {
            saveMovie(card).then(sm => setSaved(mov => mov === undefined ? undefined : [...mov, sm])).catch(setError);
        },
        delete: card => {
            if (saved !== undefined) {
                const savedEquivalent = ("_id" in card) ? card : saved.find(mov => mov.movieId === card.movieId);
                if (savedEquivalent !== undefined) {
                    deleteSavedMovie(savedEquivalent._id).catch(setError);
                    setSaved(mov => mov.filter(d => d.movieId !== card.movieId));
                }
            }
        }
    }

    useEffect(() => {
        if (!isSaved) {
            localStorage.setItem("short", short);
            localStorage.setItem("name", name);
        }
    }, [isSaved, short, name]);
    return (
        <MoviesContext.Provider value={context}>
            <Header />
            <main>
                <SearchForm short={short} setShort={v => { setShort(v); setCount(initialMoviesCount()) }} name={name} setName={setName} />
                <MoviesCardList short={short} name={name} isSavedMovies={isSaved} />
            </main>
            <Footer />
        </MoviesContext.Provider>
    )
}

const initialMoviesCount = () => window.innerWidth > 480 ? 12 : 5;
const addedMoviesCount = () => window.innerWidth > 480 ? 3 : 2;

const mapExternalMovie = movie => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: "https://api.nomoreparties.co" + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
});

export default Movies;
