import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from '../main/Main';
import Movies from '../movies/Movies';
import Register from '../register/Register';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LoggedInUserContext from "../../contexts/LoggedInUserContext";
import {useEffect, useState} from "react";
import {getUser} from "../../utils/MainApi";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt") !== null);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then(setUser);
  }, []);
  
  return (
    <div className="page">
      <CurrentUserContext.Provider value={user}>
      <LoggedInUserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<ProtectedRoute loggedIn={loggedIn}><Movies saved={false}/></ProtectedRoute>} />
        <Route path='/saved-movies' element={<ProtectedRoute loggedIn={loggedIn}><Movies saved={true}/></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute loggedIn={loggedIn}><Profile /></ProtectedRoute>} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </LoggedInUserContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

function ProtectedRoute({loggedIn, children}){
  return loggedIn ? <>{children}</> : <NotFoundPage />;
}

/*export default function App() {
  
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}*/
