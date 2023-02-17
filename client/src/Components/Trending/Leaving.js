import axios from "axios";

import { useEffect, useState } from "react";

import Genres from "../Page/Genres";

import Page from "../Page/Page";

import LeavingContent from "./LeavingContent";

import "./Trending.css";




import React from 'react';




const Leaving = () => {

  const [page, setPage] = useState(1);

  const [content, setContent] = useState([]);

  const [numberOfPages, setNumOfPages] = useState();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [genres, setGenres] = useState([]);
  const video = require('../video/LeavingB.mp4');



  let leavingData = [];




  const options = {

    method: 'GET',

    url: 'https://streaming-availability.p.rapidapi.com/changes',

    params: {
      service: 'netflix',
      country: 'ca',

      change_type: 'new',

      type: 'movie',

      output_language: 'en'

    },

    headers: {

      'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',

      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'

    }

  };




  axios.request(options).then(function(response) {

    console.log(response.data);

  }).catch(function(error) {

    console.error(error);

  });







  useEffect(() => {

    const fetchLeaving = () => {

      axios.request(options).then(function(response) {

        // console.log("TV series response.data.results from axios req====>>>>>>>>>>>>>===", response.data.results);

        setContent(response.data.results);

        setNumOfPages(response.data.total_pages);

        console.log("response.data.results-------", response.data.results);

      })

        .catch(function(error) {

          console.error(error);

        });

    };

    fetchLeaving();

  }, [page]);


  if (content.length > 0) {

    leavingData = content.map((c, id) => (
      <LeavingContent
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
      <div className="title-css">
        {leavingData}
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

export default Leaving;