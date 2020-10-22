import React from "react"
//CSS
//Icons
import {Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PromotionsMoneyData from "../../../../Data/Advanced/PromotionsMoneyData"

const PromotionsMoney = () => {
    
    const PromotionsIconList = PromotionsMoneyData.map((item) => {
        
        return (
            <div className="promotion-item">
                <h6 className="promotion-item-title">{item.title}</h6>
                <Popover content={item.content} title={item.title}>
                    <FontAwesomeIcon icon={item.icon} size="10x" />
                </Popover>
            </div>
        )
    })

    
    return (
        <>
            <h4>How Do Promotions make money?</h4>
            <div>
                <p>
                    To understand how fighters get paid, we must first understand how
                    MMA promotions generate their income. Although every MMA promotions
                    operates differently, the main sources of income remain relatively similar.
                    These are the main three ways most promotions generate their income.
                </p>
            </div>
            <div className="site-row">
                {PromotionsIconList}
            </div>
        </>
    )

}
export default PromotionsMoney