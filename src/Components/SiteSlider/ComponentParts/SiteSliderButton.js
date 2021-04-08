import React from 'react'
// Icons
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteSliderButton = (props) => {

    const renderDirection = props.direction === "left" ? 
    faArrowCircleLeft: 
    faArrowCircleRight

    const renderPosition = props.direction === "left" ? 
    "end" : 
    "start"

    return (
        <div className="site-slider-button m-auto" style={{"textAlign": renderPosition}}>
            <FontAwesomeIcon 
                onClick={props.onClick}
                icon={renderDirection} 
                size="2x" 
                color="black"
                style={{
                    "cursor": "pointer"
                }}
            />
        </div>
    )
}

export default SiteSliderButton