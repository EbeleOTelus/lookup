import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import './App.css';
 import NavBar from './Components/NavBar/NavBar';
// import { Container } from '@mui/system';
import Trending from './Components/Trending/Trending';
import Movies from './Components/Movies/Movies';
import TvSeries from './Components/TvSeries/TvSeries';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home';
import SideBar from './Components/NavBar/SideBar';
import Login from './Components/Login/login';
import './Components/Login/login.css';
import Signup from './Components/Signup/Signup';

export default function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
    <div className="App">
      
   
      {/* <Container> */}
       <Routes>
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<Signup/>} /> 
       <Route path='/' element={<Home/>} exact/>
        <Route path='/trending' element={<Trending/>} exact/>
        <Route path='/movies' element={<Movies/>} exact/>
        <Route path='/tvseries' element={<TvSeries/>} exact/>
        <Route path='/search' element={<Search/>} exact/>
        
        
       </Routes>
        
      {/* </Container> */}
      
    </div>
      <NavBar />
      </BrowserRouter>
    </>
  );
}