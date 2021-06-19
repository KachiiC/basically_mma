import React from 'react'
// COMPONENTS
import { Collapse } from 'antd';
import './AntdCollapsable.css'
import AntdPanelTitle from './CollapsableContents/AntdPanelTitle';

const AntdCollapsable = (props) => {

    const {Panel} = Collapse; 

    // For each object in props.data returns panel title and content inside panel on click
    const displayedTabs = props.data.map((panel, index) => (
            <Panel 
                key={index}
                header={<AntdPanelTitle title={panel.title}/>}
            >
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