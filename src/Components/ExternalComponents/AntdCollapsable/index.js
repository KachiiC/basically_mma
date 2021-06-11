import React from 'react'
// COMPONENTS
import { Collapse } from 'antd';

const AntdCollapsable = (props) => {

    const {Panel} = Collapse; 
    
    const displayedTabs = props.data.map((panel, index) => (
            <Panel header={<div className="term-tab">{panel.title}</div>} key={index}>
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