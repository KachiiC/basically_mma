import React from 'react'
// ICONS
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// CSS
import './SiteOverlay.css'
import { faReadme } from '@fortawesome/free-brands-svg-icons'

const SiteOverlay = (props) => {

    const iconLogic = props.icon === "play" ? 
        <FontAwesomeIcon 
            className="play-btn cursor-pointer"
            icon={faPlay} 
            size="2x" 
        />
        :
        <FontAwesomeIcon 
            className="play-btn cursor-pointer"
            icon={faReadme} 
            size="2x" 
        />
    
    return (
        <div className="site-overlay-pic" onClick={props.click}>
            {iconLogic}
            {props.children}
        </div>
    )

}
export default SiteOverlay