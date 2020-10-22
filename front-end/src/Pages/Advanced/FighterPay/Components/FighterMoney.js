import React from 'react'
//CSS
//Icons
import {Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FighterMoneyData from '../../../../Data/Advanced/FighterMoneyData'

const FighterMoney = () => {

    const FightersIconList = FighterMoneyData.map((item) => {

        return (
            <div className="promotion-item">
                <h6 className="site-section-title">{item.title}</h6>
                <Popover content={item.content} title={item.title}>
                    <FontAwesomeIcon icon={item.icon} size="10x" />
                </Popover>
            </div>
        )
    })


    return (
        <>
            <h4>How do Fighters make money?</h4>
            <p>
                It's hard to argue against the fact that MMA is a dangerous sport, fighters spend 
                15-25 minutes punching each other in the face for our entertainment. Aside from the 
                scheduled duration of their fights, fighters train for months during "training camps" 
                in prepration for their fights. With the high risk of injuries during training and 
                fights, the long term brain damage and emotional stress of competing, fighters can 
                be forgiven for asking their promoters for thousands (if not millions) of dollars to 
                compete in MMA. With the increasing popularity of MMA, most professional fighters 
                would argue that they are underpaid by their promoters and Amatuer fighters are 
                not paid at all. 
            </p>

            <p>So how much should MMA fighters be paid? Before we can answer that lets examine 
                how fighters generate their income.
            </p>
            <div className="site-row">
                {FightersIconList}
            </div>
        </>
    )
}

export default FighterMoney