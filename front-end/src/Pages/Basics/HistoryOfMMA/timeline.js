import React from 'react'
// CSS
import "./index.css"
// Components
import {Timeline} from 'antd';
import TimelineData from '../../../Data/timelineData'


function MMATimeline(props) {

    const renderTimelineList = TimelineData.map((item) => {
        return (
            <Timeline.Item>
                <h5 className="history-event-header">{item.name}</h5>
                <h6 className="history-event-year">{item.year}</h6>
                <p>{item.event}</p>
            </Timeline.Item>
        )
    })

    return (
        <div className="history-timeline">
            <Timeline mode="alternate">
                {renderTimelineList}
            </Timeline>
        </div>
        );
}

export default MMATimeline;