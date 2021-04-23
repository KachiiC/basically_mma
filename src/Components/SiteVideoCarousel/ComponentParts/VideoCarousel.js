import React from 'react'
// Component
import SiteOverlay from 'SiteCss/SiteOverlay'

const VideoCarousel = (props) => (
    
    <div className="m-auto w-90">
        <SiteOverlay click={props.click} icon="play">
            <img src={props.displayed_image} 
                alt="current_slide" 
                className="site-responsive-image site-border-white cursor-pointer"
            /> 
        </SiteOverlay>
        <div style={{"gridTemplateColumns": `repeat(${props.row_images},1fr)`}}
            className="site-grid" 
        >
            {props.images}
        </div>
    </div>

)

export default VideoCarousel