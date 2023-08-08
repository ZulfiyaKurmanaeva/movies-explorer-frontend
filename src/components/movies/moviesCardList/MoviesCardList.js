import './MoviesCardList.css'
import MoviesCard from '../moviesCard/MoviesCard';
import {useEffect, useState} from "react";
import Preloader from "../../Preloader/Preloader";
import {getAllMovies} from "../../../utils/MoviesApi";
import {getSavedMovies} from "../../../utils/MainApi";
import {useNavigate} from "react-router-dom";

async function getMovies() {
    const cached = localStorage.getItem("movies");
    if(cached == null){
        const loaded = await getAllMovies();
        localStorage.setItem("movies", JSON.stringify(loaded));
        return loaded;
    }
    return JSON.parse(cached);
}

export default function MoviesCardList({isSavedMovies, short, name}) {
    const [shownMovies, setShownMovies] = useState();
    const [movies, setMovies] = useState();
    const [count, setCount] = useState(calcCount);
    
    const navigate = useNavigate();
    if (localStorage.getItem("jwt") === null){
        navigate("/");
    }

    function updateMovies() {
            try {
                if (isSavedMovies) {
                    getSavedMovies().then(setMovies);
                } else {
                    getMovies().then(x => setMovies(x.map(movie => ({
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
                    }))));
                }
            } catch {
            }
    }

    useEffect(updateMovies, [isSavedMovies]);

    useEffect(() => {
        if (movies) {
            setShownMovies(movies
                .filter(x => ((short ? x.duration <=  52 : x.duration > 52) && (x.nameRU.toLowerCase().includes(name.toLowerCase()))))
                .slice(0, count));
        }
    }, [movies, count, short, name]);

    useEffect(() => {
        const listener = () => setTimeout(() => setCount(calcCount()), 200);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener)
    }, []);
    
    function calcCount(){
        return window.innerWidth > 480 ? 12 : 5;
    }
    
    function more(){
        setCount(x => x + (window.innerWidth > 480 ? 3 : 2));
    }
    
    return shownMovies === undefined
        ? <Preloader/>
        : <section className="movies">
            <div className="movies__container">
                <ul className="movies__list">
                    <MoviesCard isSavedMovies={isSavedMovies} movies={shownMovies} updatetMovies={updateMovies}/>
                </ul>
            </div>
            <div className={isSavedMovies ? 'movies__add movies__add_type_invisible' : 'movies__add'}>
                <button type='button' className="movies__add-button" onClick={more}>Еще</button>
            </div>
        </section>;
}
