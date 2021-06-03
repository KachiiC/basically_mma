import React from 'react'
// CSS
import "./SiteCards.css"
import './Responsive.css'
// Components
import SiteFeaturedCardImage from './ComponentParts/SiteFeaturedCardImage'
import SiteSmallCards from './ComponentParts/SiteSmallCards'

const SiteArticlesCard = (props) => {
    
    // Cards will have a border bottom by default
    const displayBorder = () => {
        if (props.data.border !== false) {
            return <hr className="site-span-12"/>
        }
    }

    console.log(props.data)
    
    return (
        <div className="recommended-reading-container site-span-12 site-grid-system">
            <h3 className="site-span-12">
                {props.title}
            </h3>
            {/* Featured Card */}
            <SiteFeaturedCardImage
                data={props.data}
            />
            {/* Cards list */}
            <SiteSmallCards 
                data={props.data}
            />
            {displayBorder()}
        </div>
    )
}

export default SiteArticlesCard