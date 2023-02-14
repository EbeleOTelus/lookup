// Header
import { React, useState } from 'react';
import "./Header.css";
import Search from '../Search/Search';
import '../Login/login.css';
import { Link, useNavigate } from "react-router-dom";


const Header = (props) => {
  const isLoggedIn = props.isLoggedIn;

  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = localStorage.getItem(isLoggedIn);
  const handleLogout = () => {
    // Perform any necessary logout logic here, such as clearing local storage or making a API call

    auth.clear();
    navigate("/login");
    

  };
  return (
    <div className="Header-box">
      <span onClick={() => window.scroll(0, 0)} className="Header">
        TvHaven</span>
      <div className='loginClass'>

        
        <div>
          {isLoggedIn && <Link onClick={handleLogout} to="/login">Logout</Link>}
          {!isLoggedIn && <Link to="/login">Login🎬</Link>}
          
        {!isLoggedIn && <Link to="/signup">SignUp</Link>}
        </div>

      </div >
    </div>
  );
};

export default Header;