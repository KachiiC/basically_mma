import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

const SiteFeaturedCardImage = (props) => (

    <div className="featured-card">
        <SiteCardsImage 
            external_links={props.data.external_links}
            title={props.data.featured_title}
            image={props.data.featured_image}
            link={props.data.featured_link}
        />
    </div>
    
)

export default SiteFeaturedCardImage
