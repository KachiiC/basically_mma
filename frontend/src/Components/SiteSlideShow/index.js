import React from 'react';
// CSS
import './SiteSlideShow.css';
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Slideshow = (props) => {

    const slideIndex = props.index

    return (
        <div className="slideshows">
            <div className="slideshow-row">
                <FontAwesomeIcon icon={faAngleDoubleLeft}
                    size="2x"  
                    onClick={props.prev} 
                    className="btn-container"
                />
                <img src={props.slides[slideIndex].image} 
                    className="" 
                    alt="slider"
                />
                <FontAwesomeIcon icon={faAngleDoubleRight}
                    size="2x" 
                    onClick={props.next} 
                    className="btn-container"
                />
            </div>
        </div>
    )
}

export default Slideshow