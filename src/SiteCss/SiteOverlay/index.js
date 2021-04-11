import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// CSS
import './SiteOverlay.css'

const SiteOverlay = (props) => (
    <div className="site-overlay-pic" onClick={props.click}>
        <FontAwesomeIcon icon={faPlay} size="2x" 
            className="play-btn cursor-pointer"
        />
        {props.children}
    </div>
)

export default SiteOverlay