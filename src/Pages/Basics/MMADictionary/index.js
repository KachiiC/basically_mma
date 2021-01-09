import React from 'react'
// CSS
import './MMADictionary.css';
// Components
import MMADictionaryIntroduction from 'Data/Basics/MMADictionary/MMADictionaryIntroduction'
import Dictionary from './PageComponents/Dictionary'

const MMADictionary = () => (

    <>
        <MMADictionaryIntroduction />
        <Dictionary />
    </>

);

export default MMADictionary