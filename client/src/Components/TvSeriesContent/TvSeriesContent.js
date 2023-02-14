// import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";
import "./TvSeriesContent.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
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
const greenCheckMark = require('../images/green-check-mark-icon-transparent-background-24.png');


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

  // const [leaving, setLeaving] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("##1", streamingInfo);

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

    // let leaving;
    
    const links = objectKeys.map((key, index) => {
      // console.log("key in TvSeriesContent.js >>> >>> >>>", key);


      if (key in serviceInfo) {

        // if (streamingInfo[key].ca.leaving > 0) {
        //   const streamer = key.charAt(0).toUpperCase() + key.slice(1);
        //   const leavingDate = new Date(streamingInfo[key].ca.leaving * 1000).toLocaleString();
        //   leaving = `Leaving ${streamer} on ${leavingDate}`;
        // }

        return <button type="button" class="btn btn-warning btn-lg  btn-large-custom btn3d" style={{ width: "150px", height: "80px" }} ><span class="glyphicon glyphicon-warning-sign"></span> <a key={index} href={streamingInfo[key].ca.link} target="_blank" rel="noopener noreferrer"><img src={serviceInfo[key]} alt="" class="streamer-logo" /></a></button>;

      }

      if (!key) {
        return <div> Not available in any streaming service</div>;
      }
    });

    return links;
  };





  // console.log("tvseriescontent genreInfo------------------------------- ", genreInfo());


  // const streamerLogo = () => {
  //   if (streamingInformation === 'netflix') {
  //     return <img src={netflix} alt=""> NETFLIX </img>
  //   }
  //   if (streamingInformation === 'netflix') {
  //     return <img src={netflix} alt=""> NETFLIX </img>
  //   } 


  // }

  // const streamingInformation = streamingInfo.map((info, index) => {
  //   return index;
  // });

  // const myStyle = { border: "0px", opacity: "1", margin: "0px", padding: "0px", position: "relative" };


  // console.log("!!!!!!!!!!!!!!!!!!leaving thingedy==========", leaving);

  return (
    < div>

      <button type="button" class="btn btn-primary btn-lg btn3d" id="title-button" onClick={handleShow}><span class="glyphicon glyphicon-thumbs-up"></span>

        <div className="popular">


          <img className="poster"
            src={posterURLs} alt={title} />
          <p className="title">{title}</p>
          <span className="media_type" href={imdbLink}>
          ⭐ Rating: {imdbRating/10}
            <span className="media_type">{year}</span>
          </span>
        </div>


      </button>



      <Modal show={show} onHide={handleClose} size="lg"
        centered className="tv-box" width="900px">

        <Modal.Header >

          <Modal.Title className="modalTitle">{title}</Modal.Title>

          {streamingInformation().map((element) => {
            return element;
          })}
          {/* <div>{leaving}</div> */}

          {/* 
            <div className="modalHeaderLeft">



            </div> */}




        </Modal.Header>

        <Modal.Body>
          <div className="modalBod">

            <div className="overview" > <strong>OVERVIEW: </strong>{overview}</div>

            <div className="cast" > <strong>CAST: </strong>{cast.join(", ")} </div>

            {/* <div className="genre-modal"> <strong>GENRES: </strong>
              {genreInfo().map((element) => {
                return element;
              })}
            </div> */}

          </div>

          <iframe className="trailer-video" width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

