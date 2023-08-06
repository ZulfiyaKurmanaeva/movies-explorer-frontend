import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from '../main/Main';
import Movies from '../movies/Movies';
import Register from '../register/Register';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import NotFoundPage from '../notFoundPage/NotFoundPage';

export default function App() {
  
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies saved={false}/>} />
        <Route path='/saved-movies' element={<Movies saved={true}/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
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
