import React from 'react'
// CSS
import './SiteModal.css'
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

// Insert the modal content as children of the popup modal
// sections of the content layout must be in grid format, for example "grid-columns": "span 12"

// SUGGESTED USE
// const [showModal, setShowModal] = useState(false)
// const handleClick = showModal === true ?  setShowModal(false): setShowModal(true)
//
// <SiteModal onClick={handleClick}>
//   <div style={{"grid-columns": "span 12"}}>My Content</div>
// </SiteModal>

const SiteModal = (props) => {

  // const renderOverflow = props.overflow === "both"? {
  //     "overflow" : "scroll"
  //   }: (
  //     props.overflow === "x" ? 
  //       {
  //         "overflowX": "scroll"
  //       } : {
  //         "overflowY" : "scroll"
  //       }
  //   )  

  const { closeModal } = props;
  
    return (
        <div className="site-overlay">
          <div className="site-modal-screen" style={{"width": props.width}}>
            <div className="close-button-container" onClick={closeModal}>                  
                <FontAwesomeIcon icon={faTimes}
                  size="lg" 
                  className="close-button"
                />
            </div>
            <div className="site-modal-content" style={props.style}>
              {props.children}  
            </div>
          </div>
        </div>
    );
};
  
  
export default SiteModal;