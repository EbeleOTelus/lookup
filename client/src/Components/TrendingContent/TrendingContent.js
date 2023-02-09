
import "./TrendingContent.css"
import  { img_300, unavaliable } from "./../images/images.js";
import { Button } from "react-bootstrap"
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useRef } from 'react';


const TrendingContent = ({
  id,
  poster,
  overview,
  title,
  date,
  media_type,
  vote_average,
  video
  
}) => {

  
    const videoRef = useRef(null);
    const handleClick = () => {
    
    }
 
  return (
    <>
    <div className="popular">
      <img className="poster" 
      src={poster ? `${img_300}/https://image.tmdb.org/t/p/w300/${poster}` : unavaliable} alt={title}/> 
    <b className="title">{title}</b>
    <span className="media_type">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="media_type">{date}</span>
    </span>
    </div>
    <span>

     <button onClick={handleClick} href={`https://www.youtube.com/watch?v=${video}`} ><YouTubeIcon/>Trailer</button>
   
   </span>
    {/* <Button
    variant = "contained"
    startIcon = {<YouTubeIcon/>}
    color = "secondary"
    target = "blank"
    href = {``}/> */}
    </>
  );


};

export default TrendingContent;