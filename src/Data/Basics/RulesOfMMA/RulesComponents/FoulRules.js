import React from 'react'
// Data
import foulData from 'Data/Basics/RulesOfMMA/RulesComponents/FoulsData'
// Components 

import { List } from 'antd';

const FoulRules = () => {


    return (
        <>
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
        </>
    )
}

export default FoulRules