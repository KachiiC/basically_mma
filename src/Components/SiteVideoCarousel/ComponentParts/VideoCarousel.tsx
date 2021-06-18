import React from 'react'
// Component
import SiteOverlay from 'SiteCss/SiteOverlay'
import SiteIcon from 'SiteCss/SiteIcon'

interface Props {
    click: any;
    displayed_image: string;
    row_images: number
    images: any
}

const VideoCarousel = (props: Props) => (
    
    <div className="m-auto w-90">
        <SiteOverlay 
            click={props.click} 
            icon={<SiteIcon icon="play" color="white" />}
        >
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