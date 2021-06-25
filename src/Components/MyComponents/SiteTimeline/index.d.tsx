import React from 'react'
// COMPONENTS
import TimelineItem from './ComponentParts/TimelineItem'
// CSS
import './SiteTimeline.css'
import './Responsive.css'
// PROPS
import { timelineProps, timelineItemProps } from './SiteTimelineProps'


const SiteTimeline = (props: timelineProps) => {
    
    // Makes a single timeline item from objects in data array
    const renderTimelineList = props.data.map((item: timelineItemProps) => (
            <TimelineItem 
                year={item.year}
                name={item.name}
                event={item.event}
                key={item.name}
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

