
import "./TrendingContent.css"
import  { img_300, unavaliable } from "./../images/images.js";
import { Button } from "react-bootstrap"
import YouTubeIcon from '@mui/icons-material/YouTube';

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


const TrendingContent = ({
  id,
  poster,
  overview,
  title,
  date,
  media_type,
  vote_average,
  video,
  release_date
  
}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
   
  return (
    <>
    <div className="trendingStyle" onClick={handleShow}>
      <img className="poster" 
      src={poster ? `${img_300}/https://image.tmdb.org/t/p/w300/${poster}` : unavaliable} alt={title}/> 
    <b className="title">{title}</b>
    <span className="media_type">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="media_type">{date}</span>
    </span>
    </div>

    <Modal show={show} onHide={handleClose} size="lg"
      centered>
        <Modal.Header closeButton>
          <Modal.Title className="display-4 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="lead">{overview}</p>
        
        <ul className="display-4">Year Of Release: {release_date}</ul>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );


};

export default TrendingContent;