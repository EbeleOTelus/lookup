// Header
import React from 'react'
import "./Header.css"
import Search from '../Search/Search';
import '../Login/login.css';

const Header = () => {
  return (
   <div className="Header-box">
    <span onClick={() => window.scroll(0, 0)} className="Header">
      TvHaven</span>
      <div className='loginClass'>
      <a href="/login">Login🎬</a>
      <a href="/signup">SignUp</a>
        </div >
      </div>
  )
}

export default Header;