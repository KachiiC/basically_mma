import React from 'react'
// Data
import TimelineData from '../../../../Data/Basics/HistoryOfMMA/timelineData'
// Components
import {Timeline} from 'antd';


const MMATimeline = () => {

    const renderTimelineList = TimelineData.map((item, index) => (
            <Timeline.Item key={index}>
                <h5 className="history-event-header">{item.name}</h5>
                <h6 className="history-event-year">{item.year}</h6>
                <p>{item.event}</p>
            </Timeline.Item>
        )
    )

    return (
        <div className="history-timeline">
            <Timeline mode="alternate">
                {renderTimelineList}
            </Timeline>
        </div>
    );
}

export default MMATimeline;