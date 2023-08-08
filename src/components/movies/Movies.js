import Header from '../header/Header';
import SearchForm from './searchForm/SearchForm'
import MoviesCardList from './moviesCardList/MoviesCardList'
import Footer from '../footer/Footer'
import {useEffect, useState} from "react";

function Movies({saved}) {
    const shortCached = localStorage.getItem("short");
    const [short, setShort] = useState(shortCached === null ? false : shortCached === "true");
    const [name, setName] = useState(localStorage.getItem("name") ?? "");
    useEffect(() => {
        localStorage.setItem("short", short);
        localStorage.setItem("name", name);
    }, [short, name]);
    return (
        <>
            <Header/>
            <main>
                <SearchForm short={short} setShort={setShort} name={name} setName={setName}/>
                <MoviesCardList short={short} name={name} isSavedMovies={saved}/>
            </main>
            <Footer/>
        </>
    )
}

export default Movies;
