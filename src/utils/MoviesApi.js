const API_URL = "https://api.nomoreparties.co/beatfilm-movies";

export async function getAllMovies(){
    const r = await fetch(API_URL);
    return await r.json();
}