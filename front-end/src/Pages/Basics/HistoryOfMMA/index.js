import React from 'react'
// CSS
import './HistoryOfMMA.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Sections
import Timeline from './PageComponents/Timeline'
import Introduction from './PageComponents/HistoryOfMMAIntroduction'



const HistoryOfMMA = () => (

    <MainAndSidebar long="yes" videos="20" news="14">
        <Introduction />
        <Timeline />
    </MainAndSidebar>

);

export default HistoryOfMMA;