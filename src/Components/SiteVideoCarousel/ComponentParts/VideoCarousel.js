import React from 'react'
// Component
import SiteOverlay from 'SiteCss/SiteOverlay'

const VideoCarousel = (props) => (
    
    <div className="m-auto w-90">
        <SiteOverlay>
            <img src={props.displayed_image} 
                alt="current_slide" 
                className="site-responsive-image cursor-pointer site-border-white"
                onClick={props.click}
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