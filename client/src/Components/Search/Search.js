import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import "./Search.css";
import axios from "axios";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";
import Radio from '@mui/material/Radio';

//radio buttons
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';


import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

//search text field
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [content, setContent] = useState([]);
  const [type, setType] = useState("movie");
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  let tvSeriesData = [];

  const fetchSearchData = () => {

    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
      params: {
        country: 'ca',
        services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple,crave',
        type: `${type}`,
        order_by: 'imdb_vote_count',
        year_min: '2000',
        year_max: '2020',
        genres: '',
        genres_relation: 'or',
        desc: 'true',
        language: 'en',
        min_imdb_rating: '',
        max_imdb_rating: '',
        min_imdb_vote_count: '',
        max_imdb_vote_count: '',
        keyword: `${keyword}`,
        output_language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function(response) {
        console.log("response.data.results", response.data.results);
        setContent(response.data.results);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const onChangeHandler = (e) => { setKeyword(e.target.value); };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.length > 0) {
      fetchSearchData();
    }
    else {
      refreshPage();
    }
  };

  function refreshPage() {
    setContent([]);
    setKeyword('');
  }

  if (content.length > 0) {
    tvSeriesData = content.map((c, id) => (
      <TvSeriesContent
        key={id}
        age={c.age}
        cast={c.cast}
        countries={c.countries}
        genres={c.genres}
        imdbID={c.imdbID}
        overview={c.overview}
        posterURLs={c.posterURLs[342]}
        streamingInfo={c.streamingInfo}
        title={c.title}
        year={c.year}
        video={c.video}
        imdbRating={c.imdbRating}
        imdbLink={`https://www.imdb.com/title/${c.imdbID}`} />
    ));
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setType(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  return (
    <div className="Search">
      <form className='search-form' >

        {/* NEW TEXT field */}
        <div>
          <TextField
            id="search-bar"
            className="text"
            onChange={onChangeHandler}
            value={keyword}
            label="Enter title"
            variant="outlined"
            placeholder="Search..."
            size="medium"
          />
        </div>

        <div className="radio-div">

          {/* Radio buttons= */}
          <FormControl sx={{ m: 3 }} error={error} variant="standard" className="search-radio">
            <FormLabel id="demo-error-radios"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="type"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="movie" control={<Radio />} label="Movie" />
              <FormControlLabel value="series" control={<Radio />} label="TV show" />
            </RadioGroup>
          </FormControl>
        </div>


        <div className="search-buttons">
          <button type="button" class="btn btn-outline-primary search-button" data-bs-toggle="button" autoComplete="off" onClick={submitHandler}>Search</button>
          <button type="button" class="btn btn-outline-primary reset-button" data-bs-toggle="button" autoComplete="off" onClick={refreshPage}>Reset</button>
        </div>
      </form>

      <div className="title-css">
        {tvSeriesData}
      </div>

      <img className="d-block w-100" src={"https://images.hdqwalls.com/download/movie-wall-e-ad-3840x2160.jpg"} alt="" />
    </div>
  );
};

export default Search;