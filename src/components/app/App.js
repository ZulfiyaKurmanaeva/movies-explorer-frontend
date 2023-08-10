import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from '../main/Main';
import Movies from '../movies/Movies';
import Register from '../register/Register';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LoggedInUserContext from "../../contexts/LoggedInUserContext";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/MainApi";

export default function App() {
    const [loggedIn, setLoggedIn] = useState();
    const [token, setToken] = useState(localStorage.getItem("jwt") ?? undefined);
    const [user, setUser] = useState({});
    useEffect(() => {
        setLoggedIn(undefined);
        if (token === undefined) {
            setLoggedIn(false);
            setUser({});
            localStorage.clear();
        } else {
            localStorage.setItem("jwt", token);
            getUser().then(u => {
                setLoggedIn(true);
                setUser(u);
            }).catch(() => {
                setLoggedIn(false);
                setUser({});
                localStorage.clear();
            })
        }
    }, [token]);

    return (
        <div className="page">
            <CurrentUserContext.Provider value={[user, setUser]}>
                <LoggedInUserContext.Provider value={[loggedIn, setToken]}>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/movies' element={<ProtectedRoute loggedIn={loggedIn}><Movies saved={false} /></ProtectedRoute>} />
                        <Route path='/saved-movies' element={<ProtectedRoute loggedIn={loggedIn}><Movies isSaved={true} /></ProtectedRoute>} />
                        <Route path='/profile' element={<ProtectedRoute loggedIn={loggedIn}><Profile /></ProtectedRoute>} />
                        <Route path='/signup' element={<OnlyUnauthorizedRoute loggedIn={loggedIn}><Register /></OnlyUnauthorizedRoute>} />
                        <Route path='/signin' element={<OnlyUnauthorizedRoute loggedIn={loggedIn}><Login /></OnlyUnauthorizedRoute>} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </LoggedInUserContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    );
}

function ProtectedRoute({ loggedIn, children }) {
    return loggedIn === undefined ? <></> : (loggedIn ? <>{children}</> : <NotFoundPage />);
}

function OnlyUnauthorizedRoute({ loggedIn, children }) {
    const navigate = useNavigate();
    if (loggedIn) {
        navigate("/movies");
    }
    return loggedIn === false ? <>{children}</> : <></>;
}
