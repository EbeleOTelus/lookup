import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import "./Search.css";
import axios from "axios";
import TvSeriesContent from "../TvSeriesContent/TvSeriesContent";


const Search = () => {

  const [keyword, setKeyword] = useState('');
  const [container, setContainer] = useState([]);
  // const [finalPoint, setfinalPoint] = useState('');


  // useEffect(() => {
  //   fetchSearchData();
  // }, [finalPoint]);

  const fetchSearchData = () => {


    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
      params: {
        country: 'ca',
        services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple,crave',
        type: 'movie',
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

  // const searchData = container.map((c, id) => (
  // if (content.length > 0) {
  //   // let imdbLink = `https://www.imdb.com/title/${item.imdbID}`;
  //   return (
  //     <div key={index}>
  //       <TvSeriesContent
  //         title={item.title}
  //         year={item.year}
  //         age={item.age}
  //         imdbLink={imdbLink}
  //         cast={item.cast}
  //         countries={item.countries}
  //         genre={item.genres}
  //         imdbID={item.imdbID}
  //         imdbRating={item.imdbRating} />
  //       overview={item.overview}
  //       posterURLs={item.posterURLs[342]}
  //       streamingInfo={item.streamingInfo}
  //       video={item.video}

  //     </div>
  //   ));
  // }

  const onChangeHandler = (e) => { setKeyword(e.target.value); };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchSearchData();
    // setfinalPoint(finalPoint);
    console.log("keyword -----------", keyword);
  };

  
  return (
    <div className="Search">

      <form onSubmit={submitHandler}>

        <input class="searchInput" type="text" placeholder="Enter title here" value={keyword} onChange={onChangeHandler} />
        <button type='submit'>Submit</button>

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

    </div>
  );
};

export default Search;