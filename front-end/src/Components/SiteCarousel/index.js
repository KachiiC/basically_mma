import React, {useState} from 'react'
// CSS
import './SiteCarousel.css'


const ImageSlider = ({ images }) => {
     
    const [index, setIndex] = useState(0); 
  
    const slideRight = () => {
      setIndex((index + 1) % images.length);
    };
  
    const slideLeft = () => {
      const nextIndex = index - 1;

      (nextIndex < 0)? setIndex(images.length - 1): setIndex(nextIndex);
    };
  
    return (
      images.length > 0 && (
        <div className="site-row">
          <button onClick={slideLeft} class="toggle-button">{"<"}</button>
          <h6>{images.title}</h6>
          <img src={images[index]} alt={index} className="site-carousel-images"/>
          <button onClick={slideRight} class="toggle-button">{">"}</button>
        </div>
      )
    );
  };
  
  export default ImageSlider;