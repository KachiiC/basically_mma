import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

const SiteFeaturedCardImage = (props) => (

    <div className="recommended-reading-feature site-span-6 m-auto">
        <div className="image-caption-container text-center"> 
            <div className="image-container text-center">
            <SiteCardsImage 
                external_links={props.data.external_links}
                title={props.data.featured_title}
                image={props.data.featured_image}
                link={props.data.featured_link}
            />
            </div>
        </div>
    </div>
    
)

export default SiteFeaturedCardImage
