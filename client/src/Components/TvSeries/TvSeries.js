

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";
import "./TvSeries.css";
import "../TvSeriesContent/TvSeriesContent.css";



const TvSeries = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const video = require('../video/Tv.mp4');

  let tvSeriesData = [];



  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
    params: {
      country: 'ca',
      services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple',
      type: 'series',
      order_by: 'imdb_vote_count',
      year_min: '2000',
      year_max: '2020',
      page: `${page}`,
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
    const fetchTvSeries = () => {
      axios.request(options).then(function(response) {

        setContent(response.data.results);
        setNumOfPages(response.data.total_pages);
      })
        .catch(function(error) {
          console.error(error);
        });
    };
    fetchTvSeries();
  }, [page]);



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

  return (

    <div>
      <div className="PageNameTagTv"> Tv Shows </div>

      <div className="title-css">
        {tvSeriesData}

      </div>

      {numberOfPages > 1 && (

        <Page setPage={setPage} numberOfPages={numberOfPages} style={{ color: "blue" }} />

      )}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>

    </div>




  );

};

export default TvSeries;


