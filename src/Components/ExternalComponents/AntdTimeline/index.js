import React from 'react'
// COMPONENTS
import { Timeline, Popover } from 'antd';

const AntdTimeline = (props) => {

    const displayData = props.data.map((item, index) => {

        const placementIndex = index % 2 === 0 ? "bottomLeft" : "bottomRight"

        const contentLogic = (
            <div className="popper-content">
                {item.content}
            </div>
        )

        return (
            <Timeline.Item className="timeline-item"
                color={item.color} 
                key={index}
            >
                <Popover 
                    content={contentLogic}
                    trigger="click"
                    placement={placementIndex}
                >
                    <h6>{item.year}</h6>
                </Popover>
                <h5>{item.event}</h5>
            </Timeline.Item>
        )

    })

    return (
        <>
            <h3>{props.title}</h3>
            <div className="promotions-timeline">
                <Timeline mode="alternate">
                    {displayData}
                </Timeline>
            </div>
            <hr className="promotions-timeline-border"/>
        </>
    )
}

export default AntdTimeline