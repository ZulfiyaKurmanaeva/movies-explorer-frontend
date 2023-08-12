const BASE_URL = 'https://api.diplom.nomoreparties.sbs';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}

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
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error during registration:", error);
        throw error;
    });
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error during login:", error);
        throw error;
    });
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
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error during user edit:", error);
        throw error;
    });
};

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('jwt'),
        },
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error getting user:", error);
        throw error;
    });
};

export function tokenCheck(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        }
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error during token check:", error);
        throw error;
    });
}

export function saveMovie(movie) {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        },
        body: JSON.stringify(movie)
    }).then(checkResponse).catch(error => {
        console.error("Error posting saved movies.", error);
        throw error;
    });
}


export function getSavedMovies() {
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            'Accept': 'application/json',
            authorization: "Bearer " + localStorage.getItem('jwt'),
        },
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error getting saved movies:", error);
        throw error;
    });
}

export function deleteSavedMovie(movieId) {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    })
    .then(checkResponse)
    .catch(error => {
        console.error("Error deleting the movie:", error);
        throw error;
    });
}
