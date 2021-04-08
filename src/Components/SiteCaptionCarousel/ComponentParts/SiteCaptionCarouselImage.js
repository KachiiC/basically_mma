import React from 'react'

const SiteCaptionCarouselImage = (props) => (
    <div className="site-span-10 w-100">
        <img className="site-responsive-image"
            src={props.image} 
            alt="gallery-selected"
        />
        <div className="caption-content w-100">
            {props.caption}
        </div>
    </div>
)

export default SiteCaptionCarouselImage