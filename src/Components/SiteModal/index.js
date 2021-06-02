import React from 'react'
// CSS
import './SiteModal.css'
import './Responsive.css'
// Icons
import ModalWindow from './ComponentParts/ModalWindow';

const SiteModal = (props) => {
  
  const { closeModal } = props;
  
  return (
    <ModalWindow
      overflow={props.overflow}
      width={props.width}
      click={closeModal}
      style={props.style}
      content={props.children}
    />
  )
};
  
  
export default SiteModal;