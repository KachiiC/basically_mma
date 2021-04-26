import React from 'react'
// CSS
import './SiteOverlay.css'

const SiteOverlay = (props) => {

    const iconLogic = () => {
        if (props.icon) {
            return props.icon
        } 
    }
    
    return (
        <div className="site-overlay-pic" onClick={props.click}>
            {iconLogic ()}
            {props.children}
        </div>
    )

}
export default SiteOverlay