import React from 'react'
import SiteExternalLink from 'SiteCss/SiteExternalLink'

const SiteSlide = (props) => (
    
    <div className="slider-container h-auto m-auto site-span-1" key={props.key}>
        <SiteExternalLink url={props.link}>
            <img className="site-responsive-image site-slider-image"
                src={props.thumbnail} 
                alt={props.key} 
            />
        </SiteExternalLink>
    </div>

)

export default SiteSlide