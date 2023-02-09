import axios from 'axios';
import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {

  const fetchGenres = () => {

    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/genres',
      headers: {
        'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    axios.request(options).then(function(response) {
      console.log("Genres response.data", response.data);
      setGenres(response.data);
    }).catch(function(error) {
      console.error(error);
    });
  };

  console.log("genres", genres);
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({})
    }
  }, []);

  const handleAddFilter = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => Object.keys(g) !== Object.keys(genre)));
    setPage(1);
  };

  const handleRemoveFilter = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selectedg) => Object.keys(selectedg) !== Object.keys(genre))

    );
    setGenres([...genres, genre]);
  };

  return (
    <div>

      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          clickable
          onDelete={() => handleRemoveFilter(genre)}
          size='small'
          key={Object.keys(genre)}
          color="primary"
        />
      ))}

      {genres && genres.map((genre, index) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          clickable
          onClick={() => handleAddFilter(genre)}
          size='small'
          key={Object.keys(genre)}
        />
      ))}


    </div>
  );
};

export default Genres;