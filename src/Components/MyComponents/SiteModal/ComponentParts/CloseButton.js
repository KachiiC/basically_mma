import React from 'react'
// COMPONENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const CloseButton = (props) => (

    <div className="close-button-container" onClick={props.click}>
        <FontAwesomeIcon 
        icon={faTimes} 
        size="lg" 
        className="close-button cursor-pointer" 
        />
    </div>
    
)


export default CloseButton