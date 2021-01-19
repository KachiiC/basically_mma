import React from 'react'
// CSS
import './SiteModal.css'
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const SiteModal = (props) => {

    const { closeModal } = props;
  
    return (
        <div className="overlay">
          <div className="site-modal-screen" style={{"width": props.width}}>
            <div className="close-button-container" onClick={closeModal}>                  
                <FontAwesomeIcon icon={faTimes}
                  size="lg" 
                  className="close-button"
                />
            </div>
            <div className="site-modal-content">
              {props.children}  
            </div>
          </div>
        </div>
    );
};
  
  
export default SiteModal;