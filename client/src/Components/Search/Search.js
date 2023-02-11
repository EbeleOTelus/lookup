import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import "./Search.css";
import axios from "axios";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";
import Button from '../Button/Button';


const Search = () => {

  const [keyword, setKeyword] = useState('');
  const [container, setContainer] = useState([]);
  // set search type to movie (true) or series (false) 
  const [type, setType] = useState("movie");



  // useEffect(() => {
  //   fetchSearchData();
  // }, [keyword]);

  const fetchSearchData = () => {

    console.log("Search type-------------", type)
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
        setContainer(response.data.results);
        console.log("container======", container);

      })
      .catch(function(error) {
        console.error(error);
      });

  };


  const onChangeHandler = (e) => { setKeyword(e.target.value); };

  const submitHandler = (e) => {
    e.preventDefault();
     if (keyword.length > 0 ) {
      fetchSearchData();
    }
    else {
      refreshPage()
    }
  };

  // Axios search for movies if type state is set to true
  const submitHandlerMovie = (e) => {
    e.preventDefault()
    setType("movie");
  };

  // Axios search for movies if type state is set to true
  const submitHandlerSeries = (e) => {
    e.preventDefault()
    setType("series");
  };
  
  function refreshPage() {
    setContainer([])
    setKeyword('');
  }

  return (
    <div className="Search">

      <form className='search-form' >

        <input class="searchInput" type="text" placeholder="Enter title here" value={keyword} onChange={onChangeHandler} />
        <button onClick={submitHandler}>Submit</button>
      <button onClick={refreshPage}>Reset</button>
      
      <button onClick={submitHandlerMovie}>Movies</button>
      <button onClick={submitHandlerSeries}>TV Shows</button>

      </form>
    
      {container && container.map((item, index) => {
        let imdbLink = `https://www.imdb.com/title/${item.imdbID}`;
        return (
          <div key={index}>
            <TvSeriesContent
              title={item.title}
              year={item.year}
              age={item.age}
              imdbLink={imdbLink}
              cast={item.cast}
              countries={item.countries}
              genre={item.genres}
              imdbID={item.imdbID}
              imdbRating={item.imdbRating} 
            overview={item.overview}
            posterURLs={item.posterURLs[342]}
            streamingInfo={item.streamingInfo}
            video={item.video}
/>
          </div>
          // <div hfref={imdbLink}></div>
        );
      })}

      <Button/>


    </div>
  );
};

export default Search;