import React from 'react'
// CSS
import './HistoryOfMMA.css'
// Sections
import SiteTimeline from 'Components/SiteTimeline'
import HistoryOfMMAIntroduction from './HistoryOfMMAIntroduction'
import timelineData from 'Data/Basics/HistoryOfMMA/timelineData'


const HistoryOfMMA = () => (

    <>
        <HistoryOfMMAIntroduction />
        <SiteTimeline data={timelineData} />
    </>

);

export default HistoryOfMMA;