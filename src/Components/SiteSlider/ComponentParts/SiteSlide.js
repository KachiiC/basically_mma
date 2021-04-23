import React from 'react'
// Components
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteOverlay from 'SiteCss/SiteOverlay'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const SiteSlide = (props) => (
    
    <div className="slider-container h-auto m-auto site-span-1" key={props.key}>
        <SiteExternalLink url={props.link}>
            <SiteOverlay icon={
                <FontAwesomeIcon 
                    className="play-btn cursor-pointer"
                    icon={faInstagram} 
                    size="2x" 
                />
            }>
                <img className="site-responsive-image"
                    src={props.thumbnail} 
                    alt={props.key} 
                />
            </SiteOverlay>
        </SiteExternalLink>
    </div>

)

export default SiteSlide