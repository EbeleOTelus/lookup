// import React from 'react';
import { img_300, unavaliable } from "./../images/images.js";
import "./LeavingContent.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useRef, useState, useEffect } from 'react';
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


const LeavingContent = ({

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
  // const [leaving, setLeaving] = useState(``);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("##1", streamingInfo);

  // let leaving = "";


  const streamingInformation = () => {
    const objectKeys = Object.keys(streamingInfo);
    console.log("##2 Leaving.js objectKeys: ", objectKeys);

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
      // console.log("key in TvSeriesContent.js >>> >>> >>>", key);


      if (key in serviceInfo) {
        if (streamingInfo[key].ca.leaving) {
          // console.log("leaving true or false ======********=====", streamingInfo[key].ca.leaving || false);
          // console.log("LEAVING streamingInfo[key].ca.leaving ***************************", streamingInfo[key].ca.leaving);
          const streamer = key.charAt(0).toUpperCase() + key.slice(1);
          const leavingDate = new Date(streamingInfo[key].ca.leaving * 1000).toLocaleString();
          // console.log("LEAVING leavingDate ***************************", leavingDate);
          const leavingString = `Leaving ${streamer} on ${leavingDate}`
          console.log("leavingstring *** *** *** *** *** *** ", leavingString)

          // setLeaving(`Leaving ${streamer} on ${leavingDate}`);
          // console.log("LEAVING leaving 11111 ***************************", leaving);

          return <><button type="button" class="btn btn-warning btn-lg  btn-large-custom btn3d" style={{ width: "150px", height: "80px" }} ><span class="glyphicon glyphicon-warning-sign"></span> <a key={index} href={streamingInfo[key].ca.link} target="_blank" rel="noopener noreferrer"><img src={serviceInfo[key]} alt="" class="streamer-logo" /></a></button><span>{leavingString}</span></>
        } else {
          return <button type="button" class="btn btn-warning btn-lg  btn-large-custom btn3d" style={{ width: "150px", height: "80px" }} ><span class="glyphicon glyphicon-warning-sign"></span> <a key={index} href={streamingInfo[key].ca.link} target="_blank" rel="noopener noreferrer"><img src={serviceInfo[key]} alt="" class="streamer-logo" /></a></button>
        }

      }
      // if (!key) {
      //   return <div> Not available in any streaming service</div>;
      // }
    });
    console.log("LEAVING links 22222 ***************************", links);
    return links;
  };
  



  // const genreInfo = () => {
  //   const objectValues = Object.values(genres);
  //   // console.log("##2", objectValues);

  //   const genInfo = { "1": "Biography", "10402": "Music", "10749": "Romance", "10751": "Family", "10752": "War", "10763": "News", "10764": "Reality", "10767": "Talk Show", "12": "Adventure", "14": "Fantasy", "16": "Animation", "18": "Drama", "2": "Film Noir", "27": "Horror", "28": "Action", "3": "Game Show", "35": "Comedy", "36": "History", "37": "Western", "4": "Musical", "5": "Sport", "53": "Thriller", "6": "Short", "7": "Adult", "80": "Crime", "878": "Science Fiction", "9648": "Mystery", "99": "Documentary" };

  //   const genreArr = objectValues.map((key, index) => {

  //     if (key in genInfo) {

  //       return <div key={index} >&nbsp;&nbsp;{genInfo[key]}&nbsp;&nbsp;</div>;

  //     }

  //     if (!key) {
  //       return <div> Not available in any streaming service</div>;
  //     }
  //   });

  //   return genreArr;
  // };

  


  return (
    <div>
      <div className="PageNameTagTv"> Leaving Soon! </div>
      <button type="button" class="btn btn-primary btn-lg btn3d" onClick={handleShow}><span class="glyphicon glyphicon-thumbs-up"></span>

        <div className="popular">


          <img className="poster"
            src={posterURLs} alt={title} />
          <p className="title">{title}</p>
          <span className="media_type" href={imdbLink}>
            IMDB Rating: {imdbRating}
            <span className="media_type">{year}</span>
          </span>
        </div>


      </button>



      <Modal show={show} onHide={handleClose} size="lg"
        centered className="tv-box" width="900px">

        <Modal.Header >

          <Modal.Title className="modalTitle">{title}</Modal.Title>

          <div>

            {streamingInformation().map((element) => {
              return element;
            })}
          </div>

            {/* {console.log("###############", leaving)} */}
            {/* <div className="modalHeaderLeft">
              <div>{leaving}</div>
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

export default LeavingContent;

