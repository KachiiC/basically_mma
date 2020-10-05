import React from 'react'
// CSS
import './index.css';
// Components
import Dictionary from './Dictionary'
import Introduction from './Introduction'

function MMADictionary(props) {

    return (

        <div className="main-container">
            <Introduction />
            <Dictionary />
        </div>
        
    );
}

export default MMADictionary