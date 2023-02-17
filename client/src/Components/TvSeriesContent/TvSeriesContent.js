import "./TvSeriesContent.css";
import React, { useRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const apple = require('../images/logoApple.png');
const netflix = require('../images/logoNetflix.png');
const crave = require('../images/logoCrave.png');
const disney = require('../images/logoDisney.png');
const HBO = require('../images/logoHBO.jpg');
const paramount = require('../images/logoParamount.jpg');
const prime = require('../images/logoPrime.png');
const showtime = require('../images/logoShowtime.png');
const starz = require('../images/logoStarz.png');

const TvSeriesContent = ({
  age,
  cast,
  countries,
  genres,
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

  const streamingInformation = () => {
    const objectKeys = Object.keys(streamingInfo);
    console.log("##2", objectKeys);

    const serviceInfo = {
      prime: prime,
      netflix: netflix,
      disney: disney,
      HBO: HBO,
      paramount: paramount,
      starz: starz,
      showtime: showtime,
      apple: apple,
      crave: crave
    };

    const links = objectKeys.map((key, index) => {

      if (key in serviceInfo) {
        return <button type="button" class="btn btn-warning btn-lg  btn-large-custom btn3d" style={{ width: "150px", height: "80px" }} ><span class="glyphicon glyphicon-warning-sign"></span> <a key={index} href={streamingInfo[key].ca.link} target="_blank" rel="noopener noreferrer"><img src={serviceInfo[key]} alt="" class="streamer-logo" /></a></button>;
      }

      if (!key) {
        return <div> Not available in any streaming service</div>;
      }
    });

    return links;
  };

  return (
    < div>
      <button type="button" class="btn btn-primary btn-lg btn3d" id="title-button" onClick={handleShow}><span class="glyphicon glyphicon-thumbs-up"></span>
        <div className="popular">
          <img className="poster"
            src={posterURLs} alt={title} />
          <p className="title">{title}</p>
          <span className="media_type" href={imdbLink}>
            ⭐ Rating: {imdbRating / 10}
            <span className="media_type">{year}</span>
          </span>
        </div>
      </button>

      <Modal show={show} onHide={handleClose} size="lg"
        centered className="tv-box" width="900px">

        <Modal.Header>
          <div className="modal-top">
            <Modal.Title className="modalTitle">{title}</Modal.Title>
            {streamingInformation().map((element) => {
              return element;
            })}
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="modalBod">
            <div className="overview" > <strong>OVERVIEW: </strong>{overview}</div>
            <div className="cast" > <strong>CAST: </strong>{cast.join(", ")} </div>
          </div>
          <iframe className="trailer-video" width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>

        <Modal.Footer>
          <button type="button" class="btn btn-warning btn-lg btn-large-custom btn3d" style={{ width: "150px", height: "80px" }} ><span class="glyphicon glyphicon-warning-sign"></span>
            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noreferrer">
              <img height="50px" src={"https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"} alt="Coding Beauty logo"></img>
            </a>
          </button>
          <button type="button" class="btn btn-warning btn-lg btn-large-custom btn3d" onClick={handleClose} style={{ width: "60px", height: "60px" }}  ><span class="glyphicon glyphicon-off"></span><img src="http://clipart-library.com/images_k/green-check-mark-icon-transparent-background/green-check-mark-icon-transparent-background-24.png" alt="" style={{ width: "30px" }} ></img></button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TvSeriesContent;