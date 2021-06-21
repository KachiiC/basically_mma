import React from 'react'
import './SiteLinkLargeButton.css'

const SiteLinkLargeButton = (props) => (
    <div className="link-large-button w-80 m-auto" 
        onClick={props.click}
    >
        {props.text}
    </div>
)

export default SiteLinkLargeButton