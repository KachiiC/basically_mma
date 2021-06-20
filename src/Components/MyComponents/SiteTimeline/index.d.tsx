import React from 'react'
// COMPONENTS
import TimelineItem from './ComponentParts/TimelineItem'
// CSS
import './SiteTimeline.css'
import './Responsive.css'

interface itemProps {  
    year: number;
    name: string;
    event: string;
}

interface Props {
    data: itemProps[];
}

const SiteTimeline = (props: Props) => {
    
    // Makes a single timeline item from objects in data array
    const renderTimelineList = props.data.map((item: itemProps) => (
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

