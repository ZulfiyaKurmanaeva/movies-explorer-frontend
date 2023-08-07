const BASE_URL = 'https://api.diplom.nomoreparties.sbs'

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password

        })
    }).then(res => checkResponse(res))
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => checkResponse(res))
};

export const userEdit = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('jwt'),
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        })
    }).then(res => checkResponse(res))
};

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('jwt'),
        },
    }).then(res => res.json())
};

export function tokencheck() {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        }
    }).then(res => checkResponse(res))
}

export function saveMovie(movie){
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        },
        body: JSON.stringify(movie)
    }).then(checkResponse)
}

export function getSavedMovies(){
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            'Accept': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        },
    }).then(x => x.json())
}

export function deleteSavedMovie(movieId){
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        },
    }).then(x => x.json())
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}