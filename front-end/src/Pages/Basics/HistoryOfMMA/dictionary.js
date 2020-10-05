import React from 'react'
// Components
import DictionaryData from './Components/DictionaryData'
import Introduction from './Introduction'
// CSS
import './index.css';

function MMADictionary(props) {

    return (
        <>
            <Introduction />
            <DictionaryData />
        </>
    );
}

export default MMADictionary