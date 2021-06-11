import React from 'react'
// COMPONENTS
import { Collapse } from 'antd';
import './AntdCollapsable.css'

const AntdCollapsable = (props) => {

    const {Panel} = Collapse; 
    
    const displayedTabs = props.data.map((panel, index) => (
            <Panel header={<div className="panel-title">{panel.title}</div>} key={index}>
                {panel.content}
            </Panel>
        )
    )
    
    return (
        <Collapse>
            {displayedTabs}
        </Collapse>
    )
}

export default AntdCollapsable