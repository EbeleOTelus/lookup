import axios from 'axios';
import React, { useEffect } from 'react';
import { Chip } from '@mui/material';

const Genres = () => {


  //   {

  //   selectedGenres,
  //   setSelectedGenres,
  //   genres,
  //   setGenres,
  //   type,
  //   setPage,
  // }) => {

  const genresArray = [
    { id: "1", name: "Biography" },
    { id: "10402", name: "Music" },
    { id: "10749", name: "Romance" },
    { id: "10751", name: "Family" },
    { id: "10752", name: "War" },
    { id: "10763", name: "News" },
    { id: "10764", name: "Reality" },
    { id: "10767", name: "Talk Show" },
    { id: "12", name: "Adventure" },
    { id: "14", name: "Fantasy" },
    { id: "16", name: "Animation" },
    { id: "18", name: "Drama" },
    { id: "2", name: "Film Noir" },
    { id: "27", name: "Horror" },
    { id: "28", name: "Action" },
    { id: "3", name: "Game Show" },
    { id: "35", name: "Comedy" },
    { id: "36", name: "History" },
    { id: "37", name: "Western" },
    { id: "4", name: "Musical" },
    { id: "5", name: "Sport" },
    { id: "53", name: "Thriller" },
    { id: "6", name: "Short" },
    { id: "7", name: "Adult" },
    { id: "80", name: "Crime" },
    { id: "878", name: "Science Fiction" },
    { id: "9648", name: "Mystery" },
    { id: "99", name: "Documentary" }
  ];


  return (
    <div style={{ padding: "6px 0" }}></div>
      { genresArray.map((genre) => (
      <Chip
        label={genre.name}
        key={genre.id}
        style={{ margin: 2 }}
        size='small'
        clickable
  
      ));
  }
      
    
  )

}
export default Genres;