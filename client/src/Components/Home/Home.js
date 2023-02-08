import axios from "axios";
import { useEffect, useState } from "react";
import Signup from "../Signup/Signup";
// import TrendingContent from "../TrendingContent/TrendingContent";
import "./Home.css";

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

    // console.log("random numbers tempArr>>>", tempArr);
    // console.log("imgs>>>", imgs);
    // console.log("imgs[0]>>>", `https://image.tmdb.org/t/p/w300${imgs[tempArr[0]].poster_path}`);


    // Create a random non-repeating array from the downloaded images
    

    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        imgArr.push(`https://image.tmdb.org/t/p/w300${imgs[tempArr[i]].poster_path}`);
      }
      // console.log("imgArr", imgArr);
    }
  }


    // img1 = `https://image.tmdb.org/t/p/w300${imgs[tempArr[0]].poster_path}`
    // img2 = `https://image.tmdb.org/t/p/w300${imgs[tempArr[1]].poster_path}`
    // img3 = `https://image.tmdb.org/t/p/w300${imgs[tempArr[2]].poster_path}`
    // img4 = `https://image.tmdb.org/t/p/w300${imgs[tempArr[3]].poster_path}`

    return (

      
      
      
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">



          <div className="carousel-item active">
            <img className="d-block w-100" src={imgArr[0]} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[1]} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[2]} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[3]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[4]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[5]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[6]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[7]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[8]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[9]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[10]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[11]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[12]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[13]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[14]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[15]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[16]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[17]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[18]} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgArr[19]} alt="Fourth slide" />
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
      

    );

};

export default Home;
