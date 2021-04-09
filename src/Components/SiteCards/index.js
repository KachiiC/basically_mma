import React from 'react'
// CSS
import "./SiteArticlesCard.css"
import './Responsive.css'
// Components
import SiteCardsImage from './ComponentParts/SiteCardsImage'
import SiteFeaturedCardImage from './ComponentParts/SiteFeaturedCardImage'

const SiteArticlesCard = (props) => {
    
    const myImages = props.data
    
    // SMALL IMAGES
    const displayImagesList = myImages.small_images.map((item, index) => {

        // If external link, card will open link in new tab
        const renderImageAndLink = myImages.external_links === true ?
            <SiteCardsImage 
                external_link="yes" 
                alt={index}
                title={item.title}
                image={item.image}
                link={item.link}
            />
            :
        // If internal link, will open in this window
            <SiteCardsImage 
                alt={index}
                title={item.title}
                image={item.image}
            />
            
        return (
            <div className="site-span-6 small-list-image-container m-auto" key={index}>
                <div className="image-caption-container">
                    {renderImageAndLink}
                </div>
            </div>
        )
    })
    
    // Cards will have a border bottom by default
    const displayBorder = myImages.border === false ? 
        <> </> 
        : 
        <hr className="site-span-12"/>

    return (
        <div className="recommended-reading-container site-span-12 site-grid-system">
            <h3 className="site-span-12">
                {props.title}
            </h3>
            {/* Featured Card */}
            <SiteFeaturedCardImage
                title={myImages.featured_title}
                image={myImages.featured_image}
                link={myImages.featured_link}
            />
            {/* Cards list */}
            <div className="other-recommended-reading site-span-6 m-auto site-grid-system">
                {displayImagesList}
            </div>
            {displayBorder}
        </div>
    )
}

export default SiteArticlesCard