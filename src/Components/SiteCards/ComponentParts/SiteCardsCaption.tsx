import React from 'react'

interface Props {
    title?: string
}

const SiteCardsCaption = (props : Props) => {

    const display_title = () => {
        if (props.title) {
            return props.title.split("-").join(" ")
        } 
    }

    return (
        <div className="image-caption text-center">
            {display_title()}
        </div>
    )
}

export default SiteCardsCaption