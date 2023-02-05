

import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Page/Genres";
import Page from "../Page/Page"
import TrendingContent from "../TrendingContent/TrendingContent"

const TvSeries = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchTvSeries = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=3e4f705c9b7e42966494fdaa3ace820f&language=en-US&page=1`);


    setContent(data.results);
    setNumOfPages(data.total_pages);


  };

  useEffect(() => {
    fetchTvSeries();
  }, [page]);

  return (
    <div>
      <span className='pageTitle'>TV Shows</span>
      <Genres 
        type='series'
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
          media_type="tv"
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

export default TvSeries;


