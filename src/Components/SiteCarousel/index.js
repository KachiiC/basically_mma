import React from 'react'
// CSS
import './SiteCarousel.css'
// Components
import Icon from 'react-fa'

const SiteCarousel = (props) => {
     
    const index = props.index
  
    return (
            <div className="site-carousel-container">
              <Icon size="2x" name="angle-double-left" 
                onClick={props.prev} className="toggle-button"/>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={index} className="site-carousel-images"/>             
              </a>
              <Icon size="2x" name="angle-double-right" 
                onClick={props.next} className="toggle-button"/>
            </div>
      )
  }
  
  export default SiteCarousel;