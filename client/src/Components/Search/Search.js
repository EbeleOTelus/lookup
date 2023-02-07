import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import "./Search.css";
import axios from "axios";

const Search = () => {

  const [endPoint, setEndPoint] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setfinalPoint] = useState('');

  const fetchSearchData = () => {


    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
      params: {
        country: 'ca',
        services: 'prime,netflix,disney,hbo,paramount,starz,showtime,apple',
        type: 'movie',
        order_by: 'imdb_vote_count',
        desc: 'true',
        language: 'en',
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
      setContainer(response.data.results)
      console.log("container", container)
    })
    .catch(function(error) {
      console.error(error);
    });
    
    
  };

  useEffect(() => {
    fetchSearchData();
  }, [finalPoint]);

  const onChangeHandler = (element) => { setEndPoint(element.target.value); };

  const submitHandler = (element) => {
    element.preventDefault();
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

            <p>{item.originalTitle}</p>
          </div>
        )
      })}

    </div>
  );
};

export default Search;