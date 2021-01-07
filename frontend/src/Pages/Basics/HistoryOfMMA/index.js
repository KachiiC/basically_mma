import React from 'react'
// CSS
// Sections
import HistoryOfMMAIntroduction from 'Data/Basics/HistoryOfMMA/HistoryOfMMAIntroduction'
// Components
import SiteTimeline from 'Components/SiteTimeline'
// Data
import timelineData from 'Data/Basics/HistoryOfMMA/timelineData'


const HistoryOfMMA = () => (

    <>
        <HistoryOfMMAIntroduction />
        <SiteTimeline data={timelineData} />
    </>

);

export default HistoryOfMMA;