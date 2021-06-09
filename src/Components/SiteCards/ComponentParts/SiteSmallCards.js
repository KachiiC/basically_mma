import React from 'react'
import SiteCardsImage from './SiteCardsImage'

const SiteSmallCards = (props) => {

    const cardData = props.data

    const displayImagesList = cardData.small_images.map((item, index) => {
            
        return (
            <div className="small-image-container" key={index}>
                <SiteCardsImage 
                    external_links={props.data.external_links}
                    alt={index}
                    title={item.title}
                    image={item.image}
                    link={item.link}
                />
            </div>
        )
    })

    return (
        <div className="small-image-list site-grid-system">
            {displayImagesList}
        </div>
    )

}

export default SiteSmallCards