
import React from 'react'
// CSS
// Components
import {List } from 'antd' 
import WeightCutData from '../../../../Data/Advanced/WeightCutData'

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