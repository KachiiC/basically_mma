import React from 'react'

interface Props {     
    year: Number;
    name: String;
    event: String;
}

const TimelineItem = (props: Props) => (
    <div className="site-timeline-item" >
        <div className="site-timeline-content">
            <h3>{props.year}</h3>
            <h2>{props.name}</h2>
            <p>{props.event}</p>
        </div>
    </div>
) 

export default TimelineItem