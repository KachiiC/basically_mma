import React from 'react'
// CSS
import './timeline.css'

const SiteTimeline = (props) => {
    
    const timelineData = props.data

    const renderTimelineList = timelineData.map((item, index) => (
            <div className="site-timeline-item" key={index}>
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

export default SiteTimeline;