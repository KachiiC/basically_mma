import React from "react"
// Data
import PromotionsMoneyData from "Data/Advanced/FighterPay/PromotionsMoneyData"
//Icons
import {Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PromotionsMoney = () => {
    
    const PromotionsIconList = PromotionsMoneyData.map(
        (item, index) => (
            <div className="promotion-item" key={index}>
                <h6 className="promotion-item-title">{item.title}</h6>
                <Popover content={item.content} title={item.title}>
                    <FontAwesomeIcon icon={item.icon} size="10x" />
                </Popover>
            </div>
        )
    )

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