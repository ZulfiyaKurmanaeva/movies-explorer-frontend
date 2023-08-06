const API_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const getAllMovies = () => fetch(API_URL).then(x => x.json());