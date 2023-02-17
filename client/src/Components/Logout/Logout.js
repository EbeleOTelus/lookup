import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic
    localStorage.clear();
    navigate("/login");
  };

  return (
    <form>
    </form>
  );
};

export default Logout;