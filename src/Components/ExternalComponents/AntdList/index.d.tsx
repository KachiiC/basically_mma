import React from 'react'
// Data
// Components
import {  List } from 'antd' 
import SingleListLine from './ListContents/SingleListLine'

interface itemProps {
    icon: any;
    description: string;
}

interface Props {
    data: itemProps[]
    title: string;
}

const AntList = (props: Props) => {

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