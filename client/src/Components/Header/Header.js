// Header
import { React, useState } from 'react';
import "./Header.css";
import Search from '../Search/Search';
import '../Login/login.css';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate()


  const handleLogout = () => {
    // Perform any necessary logout logic here, such as clearing local storage or making a API call
    // navigate("/");
    setIsLoggedIn(false);
  };
  return (
    <div className="Header-box">
      <span onClick={() => window.scroll(0, 0)} className="Header">
        TvHaven</span>
      <div className='loginClass'>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login">Login🎬</a>
          )}
          <a href="/signup">SignUp</a>

      </div >
    </div>
  );
};

export default Header;