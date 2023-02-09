// import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";
import "./TvSeriesContent.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


const TvSeriesContent = ({
  key,
  age,
  cast,
  countries,
  genre,
  imdbID,
  overview,
  posterURLs,
  streamingInfo,
  title,
  year,
  video,
  imdbRating,
  imdbLink
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log("##1", streamingInfo);

  const streamingInformations = () => {
    const objectKeys = Object.keys(streamingInfo);
    // console.log("##2", objectKeys)
    const links = objectKeys.map((key) => {
      return streamingInfo[key].ca.link;
    });
    
    return <a href={links[0]} target="_blank" rel="noreferrer">
{objectKeys[0]}
    </a>;

    // objectKeys.forEach((k) => {
    //   console.log("##3", streamingInfo[k].ca.link);
    // });
  };

  console.log("##4", streamingInformations())
  

  // const streamingInformations = streamingInfo.map((info, index) => {
  //   return index;
  // });

  const myStyle = { border: "0px", opacity: "1", margin: "0px", padding: "0px", position: "relative" };

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
          <Modal.Title className="modalTitle">{title}</Modal.Title>
          <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noreferrer">
            <img height="50px" src={"https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"} alt="Coding Beauty logo"></img>
          </a>
        </Modal.Header>

        <Modal.Body>
          {streamingInformations()}
          <ul className="modalBod">OVERVIEW: {overview}</ul>
          <ul> CAST: {cast.join(", ")} </ul>
          {/* 
          { Object.keys(streamingInfo).map((key, value) => {
            return <a href={value.ca.link} target="_blank" rel="noreferrer">
            {key}
          </a>
          } */}



          <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TvSeriesContent;

