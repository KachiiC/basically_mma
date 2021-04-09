import React from 'react'
// CSS
import './SiteOverlay.css'

const SiteOverlay = (props) => {
    return (
        <div className="site-overlay-pic">
            {props.children}
        </div>
    )
}

export default SiteOverlay