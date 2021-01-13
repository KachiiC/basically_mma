import React, {useState} from 'react'
import './SiteTabs.css'
const SiteTabs = (props) => {

    const tabs = props.tabs
    const [currentTab, setCurrentTab] = useState(0)

    const displayTabs = tabs.map((tab, index) => (
        <div className="site-single-tab"
            style={{"grid-column": `span ${props.tab_size}`}}
            key={index}
            onClick={() => setCurrentTab(tabs.indexOf(tab))}
        >
            <h6>{tab.title}</h6>
        </div>
    ))

    return (
        <div className="site-tabs-component-container">
            <div 
                className="site-tabs-component-row"
                style={{"grid-template-columns": `repeat(${props.grid_size},1fr)`}}
            >
                {displayTabs}
            </div>
            <div className="site-tabs-display-content">
                {tabs[currentTab].content}
            </div>
        </div>
      );

}

export default SiteTabs