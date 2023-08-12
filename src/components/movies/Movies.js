import { useEffect, useState } from "react";

import Header from '../header/Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../footer/Footer'

import { getAllMovies } from '../../utils/MoviesApi';
import { deleteSavedMovie, getSavedMovies, saveMovie } from '../../utils/MainApi';

import MoviesContext from '../../contexts/MoviesContext';

import {INITIAL_MOVIES_COUNT, ADDED_MOVIE_COUNT, MAP_EXTERNAL_MOVIE} from '../../utils/constants';

function Movies({ isSaved }) {
    const shortCached = localStorage.getItem("short");
    const nameCached = localStorage.getItem("name");
    const totalCached = localStorage.getItem("total");
    const [short, setShort] = useState(isSaved || shortCached === null ? false : shortCached === "true");
    const [name, setName] = useState(isSaved ? "" : nameCached ?? "");
    const [count, setCount] = useState(INITIAL_MOVIES_COUNT());
    const [total, setTotal] = useState(totalCached === null ? undefined : JSON.parse(totalCached));
    const [shown, setShown] = useState();
    const [saved, setSaved] = useState();
    const [canShowMore, setCanShowMore] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (total === undefined) {
            getAllMovies().then(mov => mov.map(MAP_EXTERNAL_MOVIE)).then(totalMov => {
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
                .filter(mov => (short ? mov.duration <= 40 : true) && mov.nameRU.toLowerCase().includes(name.toLowerCase()));
            if ((filtered.length <= count) || isSaved) {
                setCanShowMore(false);
                setShown(filtered);
            } else {
                setCanShowMore(true);
                setShown(filtered.slice(0, isSaved ? total.length : count));
            }
        }
    }, [total, saved, count, isSaved, short, name]);

    const saveCard = async (card) => {
        try {
            const savedMovie = await saveMovie(card);

            const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
            savedMovies.push(savedMovie);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

            setSaved(mov => (mov === undefined ? [savedMovie] : [...mov, savedMovie]));
        } catch (error) {
            setError(error);
        }
       };

    const deleteCard = async (card) => {
        try {
            if (saved !== undefined) {
                const savedEquivalent = ("_id" in card)
                    ? card
                    : saved.find(mov => mov.movieId === card.movieId);
    
                if (savedEquivalent !== undefined) {
                    await deleteSavedMovie(savedEquivalent._id);
                    setSaved(mov => mov.filter(d => d.movieId !== card.movieId));
                }
            }
        } catch (error) {
            setError(error);
        }
       };

    const moviesContext = {
        total: total,
        shown: shown,
        saved: saved,
        canShowMore: canShowMore,
        error: error,
        showMore: () => { setCount(count => count + ADDED_MOVIE_COUNT()) },
        save: saveCard,
        delete: deleteCard,  
        name: name
    }

    useEffect(() => {
        if (!isSaved) {
            localStorage.setItem("short", short);
            localStorage.setItem("name", name);
        }
    }, [isSaved, short, name]);

    useEffect(() => {
        function listener() {
            setTimeout(() => {
                setCount(INITIAL_MOVIES_COUNT());
            }, 200);
        }
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    })

    return (
        <MoviesContext.Provider value={moviesContext}>
            <Header />
            <main>
                <SearchForm short={short} setShort={v => { setShort(v); setCount(INITIAL_MOVIES_COUNT()) }} name={name} setName={setName} />
                <MoviesCardList short={short} name={name} isSavedMovies={isSaved} />
            </main>
            <Footer />
        </MoviesContext.Provider>
    )
}

export default Movies;
