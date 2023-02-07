import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";
import "./TvSeriesContent.css"
import Genres from '../Page/Genres.js';

const TvSeriesContent = ({
  id,
  age,
  cast,
  countries,
  genre,
  imbdb,
  overview,
  posterURLs,
  streamingInfo,
  title,
  year,
  imdbRating
}) => {
 
  return (
    <div className="popular">
      <Genres 
      
      />
      <img className="poster"
        src={posterURLs} alt={title} />
      <b className="title">{title}</b>
      <span className="media_type">
      IMDB Rating: {imdbRating}
        <span className="media_type">{year}</span>
      </span>
      {/* <h3>{props.age}</h3>
<h2>{props.cast}</h2> */}

    </div>
  );
};

export default TvSeriesContent;