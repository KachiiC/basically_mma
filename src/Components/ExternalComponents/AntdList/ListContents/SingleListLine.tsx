import React from 'react'
import { List } from 'antd' 

interface Props {
    icon: string;
    description: string;
}

const SingleListLine = (props: Props) => (

    <List.Item>
        <List.Item.Meta
            avatar={props.icon}
            description={props.description}
        />
    </List.Item>

)

export default SingleListLine