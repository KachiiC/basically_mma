import React from 'react'
// CSS
import "./SiteCards.css"
import './Responsive.css'
// Components
import SiteFeaturedCardImage from './ComponentParts/SiteFeaturedCardImage'
import SiteSmallCards from './ComponentParts/SiteSmallCards'

interface dataProps {
    border: boolean;
    featured_image: string;
    featured_title: string;
    featured_link: string;
    external_links: boolean;
    small_images: any;
}

interface Props {
    data: dataProps;
    title: string;
}

const SiteArticlesCard = (props: Props) => {
    
    // Cards will have a border bottom by default
    const displayBorder = () => {
        if (props.data.border === true) {
            return <hr className="site-span-12"/>
        }
    }
    
    return (
        <div className="site-span-12 site-grid-system">
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