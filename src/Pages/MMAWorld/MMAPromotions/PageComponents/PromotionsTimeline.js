import React from 'react'
// Components
import { Timeline, Popover } from 'antd';
// Data
import PromotionsData from "Data/MMAWorld/MMAPromotions/PromotionsData"

const PromotionsTimeline = () => {

    const displayData = PromotionsData.map((item, index) => (
        <Timeline.Item color={item.color} key={index}>
            <Popover content={
                <div className="popper-content">
                    {item.content}
                </div>}
            >
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