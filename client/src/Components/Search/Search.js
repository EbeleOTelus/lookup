import React, { useState, useEffect} from 'react'
import axios from "axios";
import { NavItem } from 'react-bootstrap';
import "./Search.css";

const Search = () => {

  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')

  // fetch movies from API
  const fetchMovies = () => {
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
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }

  // fetch tv shows from API
  const fetchSeries = () => {
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
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }

  useEffect(() => {
    fetchMovies()
  }, [searchPhrase])

  const onChangeHandler = (element) => {setEndPoint(element.target.value)}

  const submitHandler = (element) => {
    element.preventDefault()
    setSearchPhrase(endPoint)
  }

  return (
    <div className="Search">
      <form onSubmit={submitHandler} className="search-form">
        <input type="text" className="search-input" value={endPoint} onChange={onChangeHandler}/>
        <button type='submit' className="search-button">Submit</button>
      </form>
      {/* {container.map((element) => {
        return (
          <div>
            <img src={element} alt="" />
            <p>{element}</p>
          </div>
        )
      })} */}
    
    </div>
  )
}

export default Search