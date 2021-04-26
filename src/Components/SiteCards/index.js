import React from 'react'
// CSS
import "./SiteCards.css"
import './Responsive.css'
// Components
import SiteFeaturedCardImage from './ComponentParts/SiteFeaturedCardImage'
import SiteSmallCards from './ComponentParts/SiteSmallCards'

const SiteArticlesCard = (props) => {
    
    const myImages = props.data
    
    // Cards will have a border bottom by default
    const displayBorder = () => {
        if (myImages.border !== false) {
            return <hr className="site-span-12"/>
        }
    }
    
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
                <SiteSmallCards data={myImages} />
            </div>
            {displayBorder()}
        </div>
    )
}

export default SiteArticlesCard