import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

const SiteFeaturedCardImage = (props) => {

    return (
        <div className="recommended-reading-feature site-span-6 m-auto">
            <div className="image-caption-container text-center"> 
                <div className="image-container text-center">
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
