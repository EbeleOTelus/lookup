import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout logic here, such as clearing local storage or making a API call
    localStorage.clear();
    navigate("/login");

  };



  return (
    <form>

    </form>
  );
};

export default Logout;