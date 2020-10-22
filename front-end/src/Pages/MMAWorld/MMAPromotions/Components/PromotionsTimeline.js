import React from 'react'
// Components
import { Timeline, Popover } from 'antd';
import PromotionsData from "../../../../Data/Advanced/PromotionsData"

const PromotionsTimeline = () => {

    const displayData = PromotionsData.map((item, index) => (
            <Timeline.Item color={item.color} key={index}>
                <Popover content={<div className="popper-container">{item.content}</div>} 
                title={<div className="popper-title">{item.event}</div>}>
                    {item.event}
                </Popover>
                <div className="promotion-year">
                    {item.year}
                </div>
            </Timeline.Item>
        )
    )
    
    return (
        <>
            <h3>Timeline of MMA Promotions</h3>
            <Timeline mode="alternate">
                {displayData}
            </Timeline>
        </>
    )
}

export default PromotionsTimeline