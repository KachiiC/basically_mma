import React from 'react'
// Components
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteOverlay from 'SiteCss/SiteOverlay'
// ICONS
import SiteIcon from 'SiteCss/SiteIcon'

const SiteSlide = (props) => (
    
    <div className="slider-container h-auto m-auto site-span-1" key={props.key}>
        <SiteExternalLink url={props.link}>
            <SiteOverlay 
                icon={<SiteIcon icon="play" color="white" />}
            >
                <img className="site-responsive-image"
                    src={props.thumbnail} 
                    alt={props.key} 
                />
            </SiteOverlay>
        </SiteExternalLink>
    </div>

)

export default SiteSlide