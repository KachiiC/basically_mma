import React from 'react'
import {List } from 'antd' 

const SingleListLine = (props) => (

    <List.Item key={props.index}>
        <List.Item.Meta
            avatar={props.icon}
            description={props.description}
        />
    </List.Item>

)

export default SingleListLine