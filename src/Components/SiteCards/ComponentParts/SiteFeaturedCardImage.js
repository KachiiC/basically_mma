import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

const SiteFeaturedCardImage = (props) =>  {

    const renderImageAndLink = props.data.external_links === true ?
        <SiteCardsImage 
            external_link="yes"
            title={props.title}
            image={props.data.featured_image}
            link={props.data.featured_link}
        />
    :
        <SiteCardsImage 
            title={props.data.featured_title}
            image={props.data.featured_image}
            link={props.data.featured_link}
        />
    
    return (
        <div className="recommended-reading-feature site-span-6 m-auto">
            <div className="image-caption-container text-center"> 
                <div className="image-container text-center">
                    {renderImageAndLink}
                </div>
            </div>
        </div>
    )
    
    }

export default SiteFeaturedCardImage
