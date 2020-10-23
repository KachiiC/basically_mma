import React from 'react'
// Data
import WeightCutData from '../../../../Data/Advanced/WeightClasses/WeightCutData'
// Components
import {List } from 'antd' 

const WeightCutConsiderations = () => {

    const renderList = WeightCutData.map((item,index) => {
        return (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                description={item.description}
              />
            </List.Item>
        )
      })

    return (
        <>
            <h3>Choosing a weight class</h3>
            <List>
                {renderList}
            </List>
        </>       
    )

}
  
export default WeightCutConsiderations