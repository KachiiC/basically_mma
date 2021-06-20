import React from 'react'
// Components
import { Link } from "react-router-dom"
import SiteExternalLink from 'SiteTools/SiteExternalLink/index.d'
import SiteCardsCaption from './SiteCardsCaption'

interface Props {
    image: string;
    title: string;
    link: string;
    external_links?: boolean;
}

const SiteCardsImage = (props : Props) => {

    const card_image = (
        <div className="image-caption-container">
            <img className="site-responsive-image"
                alt={props.title}
                src={props.image}
                />
            <SiteCardsCaption title={props.title} />
        </div>
    )

    const renderCard = props.external_links === true ? (
        <SiteExternalLink url={props.link}>
            {card_image}
        </SiteExternalLink>
    ): (
        window.location.href === "https://kachiic.github.io/basically_mma/" ? 
        <Link to={`${props.title}`}>
            {card_image}
            
        </Link>
        :
        <Link to={`basically_mma/${props.title}`}>
            {card_image}
        </Link>
    )
    
    return renderCard
}

export default SiteCardsImage