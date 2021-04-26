import React from 'react'
//Icons
import SiteIcon from 'SiteCss/SiteIcon'

const SiteCaptionCarouselButton = (props) => {

    const renderDirection = props.direction === "left" ? 
        "circle-left"
        :
        "circle-right"

    return (
        <div className="m-auto cursor-pointer" onClick={props.function}>
            <SiteIcon icon={renderDirection} />
        </div>
    )
}

export default SiteCaptionCarouselButton