
import "./TrendingContent.css"
import  { img_300, unavaliable } from "./../images/images.js";

const TrendingContent = ({
  id,
  poster,
  overview,
  title,
  date,
  media_type,
  vote_average,
}) => {
 
  return (
    <div className="popular">
      <img className="poster" 
      src={poster ? `${img_300}/https://image.tmdb.org/t/p/w300/${poster}` : unavaliable} alt={title}/> 
    <b className="title">{title}</b>
    <span className="media_type">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="media_type">{date}</span>
    </span>
    </div>
  );


};

export default TrendingContent;