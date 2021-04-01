import React from 'react'
// CSS
import './SiteModal.css'
import './Responsive.css'
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const SiteModal = (props) => {

  const { closeModal } = props;
  
    return (
        <div className="site-overlay w-100 h-100">
          <div className="modal-screen w-80 h-80" style={{"width": props.width}}>
            <div className="close-button-container" onClick={closeModal}>                  
                <FontAwesomeIcon icon={faTimes}
                  size="lg" 
                  className="close-button"
                />
            </div>
            <div className="modal-content w-100 site-grid-system" style={props.style}>
              {props.children}  
            </div>
          </div>
        </div>
    );
};
  
  
export default SiteModal;