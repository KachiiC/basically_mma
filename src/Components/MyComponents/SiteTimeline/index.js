import React from 'react'
// COMPONENTS
import TimelineItem from './ComponentParts/TimelineItem'
// CSS
import './SiteTimeline.css'
import './Responsive.css'

const SiteTimeline = (props) => {
    
    // Makes a single timeline item from objects in data array
    const renderTimelineList = props.data.map((item, index) => (
            <TimelineItem 
                year={item.year}
                name={item.name}
                event={item.event}
                key={index}
            />
        )
    )

    return (
        <div className="site-timeline">
            {renderTimelineList}
        </div>
    )
}

export default SiteTimeline;

