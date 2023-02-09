// import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";
import "./TvSeriesContent.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useRef, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';


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
  imdbRating,
  imdbLink,
  video
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
   const myStyle = { border: "0px", opacity: "1", margin: "0px", padding: "0px", position: "relative" }
 
  return (
    <>
    <div className="popular" onClick={handleShow}>
      
      <img className="poster"
        src={posterURLs} alt={title} />
      <b className="title">{title}</b>
      <span className="media_type" href={imdbLink}>
      IMDB Rating: {imdbRating}
        <span className="media_type">{year}</span>
      </span>
    </div>
   
  <Modal show={show} onHide={handleClose} size="lg"
      centered>
        <Modal.Header closeButton>
          <Modal.Title className="display-4 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="lead">{overview}</p>
        <ul>
          {cast.join(", ")}
        </ul>
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default TvSeriesContent;

