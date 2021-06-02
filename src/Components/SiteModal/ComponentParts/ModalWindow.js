import React from 'react'
// COMPONENTS
import CloseButton from './CloseButton'

const ModalWindow = (props) => {

    const overflowStyle = () => {
        if (props.overflow === "yes") {
          return "site-overflow"
        }
    }

    return (
        <div className="site-overlay w-100 h-100">
            <div className="site-modal-window w-80 h-80" 
                style={{"width": props.width}}
            >
                <CloseButton click={props.click} />
                <div className={`site-modal-content w-100 site-grid-system ${overflowStyle()}`} 
                    style={props.style}
                >
                    {props.content}  
                </div>
            </div>
        </div>
    )
}

export default ModalWindow