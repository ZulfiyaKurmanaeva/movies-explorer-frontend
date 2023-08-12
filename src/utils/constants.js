export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_PATTERN = /^[a-zA-Zа-яА-я0-9 ]+$/;
export const PASSWORD_PATTERN = /[^ ]+/;

export const NAME_ERROR_PATTERN = 'Имя может содержать только буквы, цифры и пробел (не менее 2-х символов)';
export const EMAIL_ERROR_PATTERN = 'Введите корректный адрес электронной почты';

export const INITIAL_MOVIES_COUNT = () => window.innerWidth > 480 ? (window.innerWidth > 768 ? 12 : 8) : 5;
export const ADDED_MOVIE_COUNT = () => window.innerWidth > 480 ? (window.innerWidth > 768 ? 3 : 2) : 2;

export const MAP_EXTERNAL_MOVIE = movie => ({
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
