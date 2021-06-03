import React from 'react'
// Components
import { Link } from "react-router-dom"
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteCardsCaption from './SiteCardsCaption'

const SiteCardsImage = (props) => {

    const card_image = (
        <>
            <img className="site-responsive-image"
                alt={props.alt}
                src={props.image}
            />
            <SiteCardsCaption title={props.title} />
        </>
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