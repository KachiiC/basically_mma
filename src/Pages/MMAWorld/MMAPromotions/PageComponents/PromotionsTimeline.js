import React from 'react'
// Components
import { Timeline, Popover } from 'antd';
// Data
import PromotionsData from "Data/MMAWorld/MMAPromotions/PromotionsData"

const PromotionsTimeline = () => {

    const displayData = PromotionsData.map((item, index) => {

        const placementIndex = index % 2 === 0 ? "bottomLeft" : "bottomRight"

            return (

                <Timeline.Item className="timeline-item"
                    color={item.color} 
                    key={index}
                >
                    <Popover content={
                        <div className="popper-content">
                                {item.content}
                            </div>
                        }
                        trigger="click"
                        placement={placementIndex}
                    >
                        <h6>{item.year}</h6>
                    </Popover>
                    <h5>{item.event}</h5>
                </Timeline.Item>
            )
        }
    )

    return (
        <>
            <h3>Timeline of MMA Promotions</h3>
            <div className="promotions-timeline">
                <Timeline mode="alternate">
                    {displayData}
                </Timeline>
            </div>
            <hr className="promotions-timeline-border"/>
        </>
    )

        
}

export default PromotionsTimeline