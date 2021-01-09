import React from 'react'
// Data
import foulData from 'Data/Basics/RulesOfMMA/FoulsData'
// Components 

import { List } from 'antd';

const FoulRules = () => {


    return (
        <div>
            <h2>Fouls</h2>
            <p>
                MMA isn't a no holds barred (no rules or restrictions apply in a conflict or 
                disputed), competition, there are a long list of rules that fighters must follow 
                when they enter the cage/ring.
            </p>
            <List
                className="rules-foul-container"
                bordered
                dataSource={foulData}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default FoulRules