import React from 'react'
// COMPONENTS
import SiteCardsImage from './SiteCardsImage'

interface dataProps {
    external_links: boolean;
    featured_title: string;
    featured_image: string;
    featured_link: string;
}

interface Props {
    data: dataProps;
}

const SiteFeaturedCardImage = (props: Props) => (

    <div className="featured-card">
        <SiteCardsImage 
            external_links={props.data.external_links}
            title={props.data.featured_title}
            image={props.data.featured_image}
            link={props.data.featured_link}
        />
    </div>
    
)

export default SiteFeaturedCardImage
