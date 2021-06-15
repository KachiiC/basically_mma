import React from 'react'
// Data
// Components
import {  List } from 'antd' 
import SingleListLine from './ListContents/SingleListLine'

const AntList = (props) => {

    const renderList = props.data.map((item,index) => (
            <SingleListLine
                key={index}
                icon={item.icon}
                description={item.description}
            />
        )
    )

    return (
        <div className="w-90 m-auto">
            <h3>{props.title}</h3>
            <List>
                {renderList}
            </List>
        </div>       
    )

}
  
export default AntList