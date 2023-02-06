

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page";

import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";
// const axios = require("axios");

const TvSeries = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  let tvSeriesData = [];

  // https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
      country: 'ca',
      service: 'netflix',
      type: 'movie',
      genre: '18',
      page: '1',
      output_language: 'en',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    const fetchTvSeries = () => {
      axios.request(options).then(function(response) {
        console.log("HI",response.data.results);
        setContent(response.data.results);
      })
      .catch(function(error) {
          console.error(error);
      });
    };
    fetchTvSeries();
  }, []);

  if(content.length > 0){
    console.log("we are in the if condition")
      tvSeriesData = content.map((c, id) => (
        <TvSeriesContent
        key={id}
          age={c.age}
          cast={c.cast}
         countries={c.countries}
         genre={c.genre}
        imdbID={c.imdbID}
         overview={c.overview}
      posterURLs={c.posterURLs[342]}
         streamingInfo={c.streamingInfo}
        title={c.title}
        year={c.year} 
        video={c.video}
      imdbRating={c.imdbRating}/>
        
    ));
  }
  return (
    <div>
      {tvSeriesData}
      
    </div>
  );

};

export default TvSeries;


