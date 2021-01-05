import React from 'react'
// Data
import TimelineData from 'Data/Basics/HistoryOfMMA/timelineData'
// Components


const MMATimeline = () => {

    const renderTimelineList = TimelineData.map((item, index) => (
        <div className="site-timeline-item">
            <div className="site-timeline-content">
            <h3>{item.year}</h3>
            <h2>{item.name}</h2>
            <p>{item.event}</p>
            </div>
        </div>
        )
    )

    return (
        <div className="site-timeline">
            {renderTimelineList}
        </div>
    );
}

export default MMATimeline;