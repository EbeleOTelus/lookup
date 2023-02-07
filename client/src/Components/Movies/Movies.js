

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  let tvMoviesData = [];

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
    params: {
      country: 'ca',
      services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple',
      type: 'movie',
      order_by: 'imdb_vote_count',
      year_min: '2000',
      year_max: '2020',
      page: '1',
      desc: 'true',
      language: 'en',
      min_imdb_rating: '70',
      min_imdb_vote_count: '10000',
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };










  useEffect(() => {
    const fetchMovies = () => {
      axios.request(options).then(function(response) {
        console.log("HI",response.data.results);
        setContent(response.data.results);
      })
      .catch(function(error) {
          console.error(error);
      });
    };
    fetchMovies();
  }, []);

  if (content.length > 0) {

    tvMoviesData = content.map((c, id) => (
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
        imdbRating={c.imdbRating} />

    ));
  }

  return (

    

    <div className="trending" >
      {tvMoviesData}
          
        </div >
  
  );

};

export default Movies;


