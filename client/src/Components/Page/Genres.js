import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = (
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
) => {

  const fetchGenres = () => {
    const { data } = axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.genres);
      })
      .catch((error) =>{
        console.log(error);
      })
  
  };
  useEffect(() => {
    fetchGenres();


  }
  );

  return (
    <div></div>
  );
};

export default Genres;