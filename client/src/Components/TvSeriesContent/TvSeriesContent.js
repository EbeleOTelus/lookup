import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";

// function TvSeriesContent(props){
//   return (
//         <div className="popular">
//           <h2>TvSeriesContent</h2>
//            <img className="poster" 
//           src={props.posterURLs} alt={props.title}/>
//           <b className="title">{props.title}</b> 
//            <span className="media_type">
//       {props.genre}
//     <span className="media_type">{props.year}</span>
//     </span>  
//           {/* <h3>{props.age}</h3>
//           <h2>{props.cast}</h2> */}

//         </div>
//       );
// }
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
      <h2>TvSeriesContent</h2>
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