import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import "./Search.css";
import axios from "axios";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";
// import Button from '../Button/Button';
import Radio from '@mui/material/Radio';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';





const Search = () => {

  const [keyword, setKeyword] = useState('');
  const [content, setContent] = useState([]);
  // set search type to movie (true) or series (false) 
  const [type, setType] = useState("movie");


  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');


  let tvSeriesData = [];

  // useEffect(() => {
  //   fetchSearchData();
  // }, [keyword]);

  const fetchSearchData = () => {

    console.log("Search type-------------", type);
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
        console.log("content======", content);

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


  // // Axios search for movies if type state is set to true
  // const submitHandlerMovie = (e) => {
  //   e.preventDefault();
  //   setType("movie");
  // };

  // // Axios search for movies if type state is set to true
  // const submitHandlerSeries = (e) => {
  //   e.preventDefault();
  //   setType("series");
  // };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setType(event.target.value)
    setHelperText(' ');
    setError(false);
  };



  return (
    <div className="Search">

      <form className='search-form' >

        <input class="searchInput" type="text" placeholder="Enter title here" value={keyword} onChange={onChangeHandler} />


        {/* 

      <input onChange={submitHandlerMovie} type="radio" name="movie" value="movie" /> Movies
      <input onChange={submitHandlerSeries} type="checkbox" name="series" value="series" /> TV Shows
 */}


        {/* 
        <ToggleButtonGroup
          color="secondary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="movie">Movies</ToggleButton>
          <ToggleButton value="series">TV Shows</ToggleButton>
         </ToggleButtonGroup> */}
        {/* 
        <div>
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="movie"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="series"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
        </div> */}



        {/* ============================ */}

        <FormControl sx={{ m: 3 }} error={error} variant="standard">
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
          <FormHelperText>{helperText}</FormHelperText>
          {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button> */}
        </FormControl>








        {/* ORIGINAL CODE!!! */}

        {/* 
        <div class="m-4">

          <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" autocomplete="on" onClick={submitHandlerMovie}>Movies</button>
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" autocomplete="off" onClick={submitHandlerSeries}>TV Shows</button>

        </div> */}


        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" autocomplete="off" onClick={submitHandler}>Submit</button>

        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" autocomplete="off" onClick={refreshPage}>Reset</button>

      </form>

      <div className="title-css">
        {tvSeriesData}

      </div>



    </div>
  );
};

export default Search;