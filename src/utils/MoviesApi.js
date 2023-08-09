const API_URL = "https://api.nomoreparties.co/beatfilm-movies";

export async function getAllMovies(){
    const r = await fetch(API_URL);
    return await checkResponse(r);
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}