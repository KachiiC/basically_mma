import React from 'react'
import SiteCardsImage from './SiteCardsImage'

const SiteSmallCards = (props) => {

    const cardData = props.data

    const displayImagesList = cardData.small_images.map((item, index) => {

        // If external link, card will open link in new tab
        const renderImageAndLink = cardData.external_links === true ?
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

    return displayImagesList

}

export default SiteSmallCards