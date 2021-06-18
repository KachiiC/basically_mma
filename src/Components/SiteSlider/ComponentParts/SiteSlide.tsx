import React from 'react'
// Components
import SiteExternalLink from 'SiteTools/SiteExternalLink'
import SiteOverlay from 'SiteCss/SiteOverlay'
// ICONS
import SiteIcon from 'SiteCss/SiteIcon'

interface Props {
    link: string;
    thumbnail: string;
    alt: string
}

const SiteSlide = (props: Props) => (

    <div className="slider-container h-auto m-auto site-span-1">
        <SiteExternalLink url={props.link}>
            <SiteOverlay icon={<SiteIcon icon="play" color="white" />}>
                <img className="site-responsive-image"
                    src={props.thumbnail} 
                    alt="slider-img"
                />
            </SiteOverlay>
        </SiteExternalLink>
    </div>

)

export default SiteSlide