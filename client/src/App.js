import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Trending from './Components/Trending/Trending';
import Movies from './Components/Movies/Movies';
import TvSeries from './Components/TvSeries/TvSeries';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home';
import Login from './Components/Login/login';
import './Components/Login/login.css';
import Logout from './Components/Logout/Logout';
import Signup from './Components/Signup/Signup';
import Leaving from './Components/Trending/Leaving';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />

        <div className="App">

          {/* <Container> */}
          <Routes>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/logout' element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} exact />
            <Route path='/trending' element={<Trending />} exact />
            <Route path='/movies' element={<Movies />} exact />
            <Route path='/tvseries' element={<TvSeries />} exact />
            <Route path='/search' element={<Search />} exact />
            <Route path='/leaving' element={<Leaving />} exact />

          </Routes>

        </div>
        <NavBar />
      </BrowserRouter>
    </>
  );
}