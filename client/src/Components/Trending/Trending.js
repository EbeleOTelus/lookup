import axios from "axios";
import { useState, useEffect } from "react";
import TrendingContent from "../TrendingContent/TrendingContent";
import "./Trending.css";
import Page from "../Page/Page";


const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(10);

  // console.log("options>>>>>>", options)
  const fetchPopular = async () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(({ data }) => {
        // console.log("data>>>>>", data.results);
        return data;
      }).catch((error) => {
        console.error(error);
      });



  };

  useEffect(() => {
    fetchPopular().then((content) => {
      setContent(content.results);
    });
  }, [page]);



  return (
    <div>

        <div className="trending">
          {
            content && content.map((c) => (
              <TrendingContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                overview={c.overview}
                page={`${page}`}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
                release_date={c.release_date} />
            ))}
        </div>
        <Page  setPage={setPage}/>

    </div>
  );

};


export default Trending;