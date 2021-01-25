import React from 'react'
// CSS
import "./SiteArticlesCard.css"
// Components
import {Link} from "react-router-dom"



const SiteArticlesCard = (props) => {

    const myImages = props.data

    const displayImages = myImages.small_images.map(
        (item, index) => {
            
            const display_title = item.title.split("-").join(" ")

            return (
                <div className="site-span-6 small-list-image-container" 
                    key={index}
                >
                    <div className="image-caption-container">
                        <Link to={`basically_mma/${item.title}`}>
                            <img className="site-responsive-image"
                                alt={item.index}
                                src={`${item.image}`}
                            />
                            <div className="image-caption">
                                {display_title}
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
    )

    const display_featured_title = myImages.featured_title.split("-").join(" ")

    return (
        <div className="recommended-reading-container site-span-12 site-grid-system">
            <h3 className="site-span-12">
                {props.title}
            </h3>
            {/* Featured Card */}
            <div className="recommended-reading-feature">
                <div className="image-caption-container">
                    <Link to={`basically_mma/${myImages.featured_title}`}>
                        <div className="recommended-featured-image-container">
                            <img className="site-responsive-image"
                                src={myImages.featured_image}
                                alt="featured_reading" 
                                />
                        </div>
                    </Link>
                    <div className="image-caption featured-title">
                        {display_featured_title}
                    </div>
                </div>
            </div>
            {/* Cards list */}
            <div className="other-recommended-reading site-grid-system">
                {displayImages}
            </div>
        </div>
    )
}

export default SiteArticlesCard