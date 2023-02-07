import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import "./Search.css";
import axios from "axios";

const Search = () => {

  const [endPoint, setEndPoint] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setfinalPoint] = useState('');


  useEffect(() => {
    fetchSearchData();
  }, [endPoint]);

  const fetchSearchData = () => {


    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
      params: {
        country: 'ca',
        services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple',
        type: 'series',
        order_by: 'imdb_vote_count',
        year_min: '1990',
        desc: 'true',
        language: 'en',
        min_imdb_rating: '60',
        max_imdb_rating: '100',
        min_imdb_vote_count: '10000',
        keyword: `${endPoint}`,
        output_language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function(response) {
        console.log(response.data.results);
        setContainer(response.data.results);

      })
      .catch(function(error) {
        console.error(error);
      });

  };

  

  const onChangeHandler = (e) => { setEndPoint(e.target.value); };

  const submitHandler = (e) => {
    e.preventDefault();
    setfinalPoint(endPoint);
  };

  return (
    <div className="Search">

      <form onSubmit={submitHandler}>

        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type='submit'>Submit</button>

      </form>
      {container && container.map((item, index) => {
        return (
          <div key={index}>

            <p>{endPoint ? item.originalTitle : ???}</p>
          </div>
        );
      })}

    </div>
  );
};

export default Search;