import React from 'react'

const CarouselRowImage = (props) => (
    <div className="site-span-1 site-border-white cursor-pointer">
        <img 
            src={props.video_thumbnail} 
            alt={props.video_title} 
            className="site-responsive-image site-border-white" 
            onClick={props.click}
        />
    </div>
)

export default CarouselRowImage