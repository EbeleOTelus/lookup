
import "./TrendingContent.css"
import  { img_300, unavaliable } from "./../images/images.js";

const TrendingContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
 
  return (
    <div className="media">
      <img className="poster" 
      src={poster ? `${img_300}/https://image.tmdb.org/t/p/w300/${poster}` : unavaliable} alt={title}/> 
    <b className="title">{title}</b>
    <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="subTitle">{date}</span>
    </span>
    </div>
  );


};

export default TrendingContent;