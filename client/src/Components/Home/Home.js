import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.css";

import Trending from "../Trending/Trending";

const Home = (props) => {

  const [imgs, setImages] = useState([]);

  const imgArr = [];
  // Get the trending move information from themoviedb API
  useEffect(() => {
    const getImages = () => {
      try {
        axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        ).then((result) => {
          setImages(result.data.results);

        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getImages();
  }, []);

  // Generate an array of random non-repeating numbers from 0 to imgs.length
  if (imgs.length > 0) {
    let tempArr = [];
    do {
      let num = Math.floor(Math.random() * imgs.length);
      if (!tempArr.includes(num)) {
        tempArr.push(num);
      }
    }
    while (tempArr.length < imgs.length);




    // Create a random non-repeating array from the downloaded images


    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        imgArr.push(`https://image.tmdb.org/t/p/w300${imgs[tempArr[i]].poster_path}`);
      }

    }
  }


  return (


    <div class="home-component">

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3500">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img className="d-block w-100" src="https://wallpapercave.com/wp/wp9426168.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://wallpapercave.com/wp/wp5779609.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://wallpapercave.com/wp/wp9425985.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://w0.peakpx.com/wallpaper/60/160/HD-wallpaper-up-balloons-cartoon-film-house-movie-wind.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://wallpapercave.com/wp/wp5920277.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/15011528/pexels-photo-15011528.png" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/765062/pexels-photo-765062.jpeg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/13060861/pexels-photo-13060861.jpeg" alt="Fourth slide" />
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="PageTag"> Most Popular </div>
      <Trending />


    </div>

  );

};

export default Home;
