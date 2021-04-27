import React from 'react'
// Icons
import SiteIcon from 'SiteCss/SiteIcon'

const SiteSliderButton = (props) => {

    const renderDirection = props.direction === "left" ? 
        "circle-left"
        :
        "circle-right"

    const renderPosition = props.direction === "left" ? 
        "end" 
        : 
        "start"

    return (
        <div className="site-span-1 m-auto" style={{"textAlign": renderPosition}}>
            <SiteIcon icon={renderDirection} />
        </div>
    )
}

export default SiteSliderButton