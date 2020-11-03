import React from 'react'
// CSS
import './MMADictionary.css';
import MainAndSidebar from 'Components/MainAndSidebar';
// Components
import Dictionary from './PageComponents/Dictionary'
import Introduction from './PageComponents/MMADictionaryIntroduction'

const MMADictionary = () => (

    <MainAndSidebar long="yes" videos="8" news="5">
        <Introduction />
        <Dictionary />
    </MainAndSidebar>

);

export default MMADictionary