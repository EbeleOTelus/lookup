

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page"
import TrendingContent from "../TrendingContent/TrendingContent"

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);


    setContent(data.results);
    setNumOfPages(data.total_pages);


  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <span className='pageTitle'></span>
      <Genres 
        type='movie'
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div>
      <span className='pageTitle'>Trending</span>
      <div className="trending">
        {content && content.map((c) => 
        <TrendingContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path}
          title={c.title || c.name}  
          date={c.first_air_date || c.release_date} 
          media_type="movie"
          vote_average={c.vote_average}
          />)}
      </div>
      {numberOfPages>1 && (
      <Page setPage={setPage} numberOfPages={numberOfPages}/>
      )}
    </div>
    </div>
  );

};

export default Movies;


