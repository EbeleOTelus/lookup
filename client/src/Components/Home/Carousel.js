import { useSpringCarousel } from 'react-spring-carousel'
import axios from "axios";
import { useEffect, useState } from "react";


  export function Carousel() {


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
  
      if (imgs) {
        for (let i = 0; i < imgs.length; i++) {
          imgArr.push(`https://image.tmdb.org/t/p/w300${imgs[tempArr[i]].poster_path}`);
        }
        // console.log("imgArr", imgArr);
      }
    }
  

    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      items: imgs.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
      })),
    });
  



      return (
        <div>
          <button onClick={slideToPrevItem}>Prev item</button>
          {carouselFragment}
          <button onClick={slideToNextItem}>Next item</button>
        </div>
      );
    



  };
  
  export default Carousel;
  