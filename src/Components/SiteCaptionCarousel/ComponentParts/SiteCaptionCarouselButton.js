import React from 'react'
//Icons
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteCaptionCarouselButton = (props) => {

    const renderDirection = props.direction === "left" ? 
        faArrowCircleLeft 
        : 
        faArrowCircleRight

    return (
        <div className="m-auto cursor-pointer" onClick={props.function}>
            <FontAwesomeIcon icon={renderDirection} size="2x" />
        </div>
    )
}

export default SiteCaptionCarouselButton