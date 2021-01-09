import React from 'react'
// CSS
// Components
import SiteTimeline from 'Components/SiteTimeline'
// Data
import timelineData from 'Data/Basics/HistoryOfMMA/timelineData'


const HistoryOfMMA = () => (
    
    <SiteTimeline data={timelineData} />

);

export default HistoryOfMMA;