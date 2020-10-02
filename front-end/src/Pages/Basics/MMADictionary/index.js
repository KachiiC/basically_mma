import React from 'react'
// CSS
import './index.css';
// Components
import Dictionary from './Dictionary'
import Introduction from './Introduction'

function MMADictionary(props) {

    return (
        <>
            <Introduction />
            <Dictionary />
        </>
    );
}

export default MMADictionary