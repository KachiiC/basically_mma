import React from 'react'
// CSS
// COMPONENTS
import SiteIcon from 'SiteCss/SiteIcon';
import SiteOverlay from 'SiteCss/SiteOverlay'

const FeaturedFight = (props) => (

        <div className="w-90 m-auto">
            <SiteOverlay 
                click={props.click} 
                icon={
                    <SiteIcon 
                        icon="play" 
                        color="white" 
                    />
                }
            >
                <img className="site-responsive-image"
                    src={props.video_thumbnail} 
                    alt={props.video_description}
                />
            </SiteOverlay>
            <div className="caption-content">
                <h6>{props.video_title}</h6>
                <p>{props.video_description}</p>
            </div>
        </div>

)

export default FeaturedFight