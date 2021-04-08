import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

const SiteFeaturedCardImage = (props) => {

    return (
        <div className="recommended-reading-feature">
            <div className="image-caption-container"> 
                <div className="recommended-featured-image-container">
                    <SiteCardsImage 
                        alt={props.title} 
                        image={props.image}
                        link={props.link} 
                        title={props.title}
                    />
                </div>
            </div>
        </div>
    )
}

export default SiteFeaturedCardImage
