import React from 'react'
// Icons
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteSliderButton = (props) => {

    const renderDirection = props.direction === "left" ? faArrowCircleLeft: faArrowCircleRight
    const renderPosition = props.direction === "left" ? "end" : "start"

    return (
        <div className="site-slider-button" style={{"textAlign": renderPosition}}>
            <FontAwesomeIcon 
                icon={renderDirection} 
                size="2x" 
                color="black"
                style={{
                    "cursor": "pointer"
                }}
                onClick={props.onClick}
            />
        </div>
    )
}

export default SiteSliderButton