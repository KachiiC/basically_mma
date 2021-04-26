import React from 'react'
// CSS
import './SiteModal.css'
import './Responsive.css'
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const SiteModal = (props) => {
  
  const { closeModal } = props;

  const overflowStyle = () => {
    if (props.overflow === "yes") {
      return "site-overflow"
    }
  }

  // Close Button 
  const closeButton = (
    <div className="close-button-container" onClick={closeModal}>
      <FontAwesomeIcon 
        icon={faTimes} 
        size="lg" 
        className="close-button cursor-pointer" 
      />
    </div>
  )
  
  return (
      <div className="site-overlay w-100 h-100">
        <div className="site-modal-window w-80 h-80" style={{"width": props.width}}>
          {closeButton}
          <div className={`site-modal-content w-100 site-grid-system ${overflowStyle()}`} 
            style={props.style}
          >
            {props.children}  
          </div>
        </div>
      </div>
  );
};
  
  
export default SiteModal;