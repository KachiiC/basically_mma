import React from 'react';

interface ModalProperties {
  content: any;
  width?: number | string; 
  onButtonClick?: (event: React.MouseEvent) => void;
}

export default ModalProperties;