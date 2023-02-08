// Header
import React from 'react'
import "./Header.css"
import Search from '../Search/Search';

const Header = () => {
  return (
   <div className="Header-box">
    <span onClick={() => window.scroll(0, 0)} className="Header">
      TvHaven</span>
      <div className='loginClass'>
      <a>Login🎬</a>
      <a>SignUp</a>
        </div >
      </div>
  )
}

export default Header