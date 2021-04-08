import React from 'react'

const VideoCarousel = (props) => (
    
    <div className="m-auto w-90">
        <img src={props.displayed_image} 
            alt="current_slide" 
            className="site-responsive-image selected-image"
            onClick={props.click}
        />
        <div style={{"gridTemplateColumns": `repeat(${props.row_images},1fr)`}}
            className="site-grid" 
        >
            {props.images}
        </div>
    </div>

)

export default VideoCarousel