const API_URL = "https://api.nomoreparties.co/beatfilm-movies";

export async function getAllMovies() {
    try {
        const response = await fetch(API_URL);
        return await checkResponse(response);
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
}