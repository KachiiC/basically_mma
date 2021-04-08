import React from 'react'

const SiteCardsCaption = (props) => {

    const title = props.title

    const display_title = title ? title.split("-").join(" ") : ""

    return (
        <div className="image-caption">
            {display_title}
        </div>
    )
}

export default SiteCardsCaption