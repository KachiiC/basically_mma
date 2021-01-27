import React from 'react'

const SiteCardsCaption = (props) => {

    const display_title = props.title.split("-").join(" ")

    return (
        <div className="image-caption">
            {display_title}
        </div>
    )
}

export default SiteCardsCaption