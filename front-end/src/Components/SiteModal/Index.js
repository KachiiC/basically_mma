import React from 'react'
import './SiteModal.css'

const SiteModal = (props) => {
    
    const { closeModal } = props;

    return (

        <div className="modal-overlay">
            <div className="modal-content">
            <div className="close-modal-button-container" onClick={closeModal}>
                <span className="close-modal-button">X</span>
            </div>
            {props.children}
            </div>
        </div>
    )
}

export default SiteModal