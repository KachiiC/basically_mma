import React from 'react';
// CSS
import './siteslideshow.css';
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
                    className="fight-strat-btn-container"
                />
                <img src={props.slides[slideIndex].image} 
                    alt="slider"
                    className="slide"
                />
                <FontAwesomeIcon icon={faAngleDoubleRight}
                    size="2x" 
                    onClick={props.next} 
                    className="fight-strat-btn-container"
                />
            </div>
        </div>
    )
}

export default Slideshow