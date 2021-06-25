import React from 'react'
//PROPS
import { timelineItemProps } from '../SiteTimelineProps'

const TimelineItem = (props: timelineItemProps) => (

    <div className="site-timeline-item" >
        <div className="site-timeline-content">
            <h3>{props.year}</h3>
            <h2>{props.name}</h2>
            <p>{props.event}</p>
        </div>
    </div>
    
) 

export default TimelineItem