import React from 'react'
// CSS
import "./SiteArticlesCard.css"
// Components
import {Link} from "react-router-dom"
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteCardsImage from './SiteCardsImage'
import SiteCardsCaption from './SiteCardsCaption'

// Example Usage:
// <SiteArticlesCard 
//  data={HomeRecommendedCards} 
//  title="Recommended Reading" 
// />
//
// Example Data:
// const ExampleData = {
//     featured_image: "",
//     featured_title: "",
//     featured_link: ""
//     small_images: [
//         {
//             image: "",
//             title: "",
//             link: ""
//         }
//     ],
//     external_link: false
// }
//
// Note only four small images

const SiteArticlesCard = (props) => {

    const myImages = props.data

    const displayImagesList = myImages.small_images.map(
        
        (item, index) => {

            const item_image =  (
                <>
                    <SiteCardsImage alt={index} url={item.image} />
                    <SiteCardsCaption title={item.title} />
                </>
            )

            const renderImageAndLink = myImages.external_links === true ?
                <SiteExternalLink url={item.link}>
                    {item_image}
                </SiteExternalLink>
                 : 
                <Link to={`basically_mma/${item.title}`}>
                    {item_image}
                </Link>

            return (
                <div className="site-span-6 small-list-image-container" 
                    key={index}
                >
                    <div className="image-caption-container">
                        {renderImageAndLink}
                    </div>
                </div>
            )
        }
    )

    const display_featured_image = 
        <div className="recommended-featured-image-container">
            <SiteCardsImage 
                alt={myImages.featured_title} 
                url={myImages.featured_image}
            />
        </div>

    const display_featured_image_and_image = myImages.external_links === true ?
        <SiteExternalLink url={myImages.featured_link}>
            {display_featured_image}
        </SiteExternalLink>
            :
        <Link to={`basically_mma/${myImages.featured_title}`}>
            {display_featured_image}
        </Link>
        
    return (
        <div className="recommended-reading-container site-span-12 site-grid-system">
            <h3 className="site-span-12">
                {props.title}
            </h3>
            {/* Featured Card */}
            <div className="recommended-reading-feature">
                <div className="image-caption-container">
                    {display_featured_image_and_image}
                    <SiteCardsCaption title={myImages.featured_title} />
                </div>
            </div>
            {/* Cards list */}
            <div className="other-recommended-reading site-grid-system">
                {displayImagesList}
            </div>
        </div>
    )
}

export default SiteArticlesCard