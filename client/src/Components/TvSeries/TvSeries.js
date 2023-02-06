

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

  const fetchTvSeries = async () => {

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
    
    axios.request(options).then(function (response) {
      console.log(response);
      

    }).catch(function (error) {
      console.error(error);
    });

      // console.log("TV SERIES content >>>", content)
      // console.log("TV SERIES pages >>>", pages)
    // setContent(response.results);
    // setNumOfPages(response.results.total_pages);

    // console.log("TV SERIES response >>>", response)
    // console.log("TV SERIES error >>>", err)


    //     setNumOfPages(response.results.total_pages);

  };

  useEffect(() => {
    fetchTvSeries();
  }, []);

  return (
    <div>
      App
    </div>
  );

};

export default TvSeries;


