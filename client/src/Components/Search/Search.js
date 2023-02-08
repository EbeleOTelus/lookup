import React, { useState, useEffect} from 'react'
import { NavItem } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import "./Search.css";

const Search = () => {

  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')

  const fetchSearchData = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5aac6a45f7mshd86f9fdd63ba4c6p18cb0bjsn84842e7256c9',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    fetch('https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Chbo%2Chulu%2Cpeacock%2Cparamount%2Cstarz%2Cshowtime%2Capple%2Cmubi&type=movie&order_by=imdb_vote_count&year_min=2000&genres_relation=or&desc=true&language=en&min_imdb_rating=70&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en', options)
      .then(response => response.json())
      .then(data => setContainer(data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchSearchData()
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