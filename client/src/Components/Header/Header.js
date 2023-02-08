// Header
import React from 'react'
import "./Header.css"


const Header = () => {
  return (
   <div className="Header-box">
    <span onClick={() => window.scroll(0, 0)} className="Header">
      TvHaven</span>
    </div>
  )
}

export default Header