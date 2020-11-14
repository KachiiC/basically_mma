import React, {useState} from 'react'
// CSS
import './SiteCarousel.css'
// Components
import Icon from 'react-fa'


const SiteCarousel = ({ images }) => {
     
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
        <>
            <div className="site-carousel-container">

              <Icon size="2x" name="angle-double-left" 
                onClick={slideRight} className="toggle-button"/>

                <img src={images[index]} alt={index} className="site-carousel-images"/>             
              
              <Icon size="2x" name="angle-double-right" 
                onClick={slideLeft} className="toggle-button"/>

            </div>
          </>
      )
    )
  }
  
  export default SiteCarousel;