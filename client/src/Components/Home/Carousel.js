import axios from "axios";
import { useEffect, useState } from "react";


export function Carousel() {

  const [data, setData] = useState([]);



  // Get the trending move information from themoviedb API
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((result) => {
      const dataWithImages = result.data.results.map((item) => {
        let image = `https://image.tmdb.org/t/p/w300${item.backdrop_path}`;
        const itemWithImage = { ...item, image };
        return itemWithImage;
      });
      setData(dataWithImages);
    })
      .catch((error) => {
        console.log("Carouse axios error ------", error);
      });
  }, []);

  console.log("Carousel data xxxxxxxxxxxxxxx", data);





  return (


    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {
          data.map((item) => (
            <div className="carousel-item active">
              <img className="d-block w-100" src={item.image} alt="First slide" />
            </div>
          ))
        }

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;