import React from 'react'
import SiteCardsImage from './SiteCardsImage'

const SiteSmallCards = (props) => {

    const cardData = props.data

    const displayImagesList = cardData.small_images.map((item, index) => {
            
        return (
            <div className="site-span-6 small-list-image-container m-auto" key={index}>
                <div className="image-caption-container">
                    <SiteCardsImage 
                        external_links={props.data.external_links}
                        alt={index}
                        title={item.title}
                        image={item.image}
                        link={item.link}
                    />
                </div>
            </div>
        )
    })

    return (
        <div className="other-recommended-reading site-span-6 m-auto site-grid-system">
            {displayImagesList}
        </div>
    )

}

export default SiteSmallCards