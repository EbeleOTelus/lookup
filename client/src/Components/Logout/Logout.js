import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleLogout = async (event) => {
  event.preventDefault();
    
  try {
    // Replace this with your authentication logic
    const response = await fetch('/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     
    });

    if (response.ok) {
      const user = await response.json();
      // Save the user data to local storage or Redux store
      setError('');
      navigate("/");
    } else {
      setError('Incorrect email or password');
    }
  } catch (err) {
    setError('Something went wrong, please try again');
  }




}



  return (
    <div>
      <a href="/logout">Login🎬</a>
    </div>
  )
}

export default Logout