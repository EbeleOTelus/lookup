

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page";
import TrendingContent from "../TrendingContent/TrendingContent";
// const axios = require("axios");

const TvSeries = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);


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

  const fetchTvSeries = () => {
    axios.request(options).then(function(response) {
      console.log(response);
    })
      .then(data => {
        setContent(data);
      })

      .catch(function(error) {
        console.error(error);
      });


  };

  useEffect(() => {
    fetchTvSeries();
  }, []);

  console.log('flagggg', content)
  // const item = c.results 
  return (
    <div>
      
    </div>
  );

};

export default TvSeries;


