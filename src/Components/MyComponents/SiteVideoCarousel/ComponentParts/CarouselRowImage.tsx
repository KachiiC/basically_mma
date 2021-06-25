import React from 'react'
// PROPS
import {carouselRowImageProps} from '../SiteVideoCarouselProps'

const CarouselRowImage = (props: carouselRowImageProps) => (
    <div className="site-span-1 site-border-white cursor-pointer">
        <img className="site-responsive-image site-border-white" 
            src={props.video_thumbnail} 
            alt={props.video_title} 
            onClick={props.click}
        />
    </div>
)

export default CarouselRowImage