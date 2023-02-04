import axios from "axios";
import { useState, useEffect } from "react";
import TrendingContent from "../TrendingContent/TrendingContent";



const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(({ data }) => {
      return data;
    }).catch((error) => {
      console.error(error);
    })


    
  };

  useEffect(() => {
    fetchTrending().then((content) => {
    setContent(content.results);
  });
  }, []);

  return (
    <div>
      <span className='pageTitle'>
        Trending
        <div className="trending">
          {
content && content.map((c) => (
  <TrendingContent
  key={c.id} 
  id={c.id} 
  poster={c.poster_path}
  title={c.title || c.name}
  date={c.first_air_date || c.release_date}
  media_type={c.media_type} 
  vote_average={c.vote_average}/>
))}
        </div>
      </span>

    </div>
  );

};

export default Trending;