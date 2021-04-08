import React, {useState} from 'react'
// CSS
import './SiteTabs.css'
import './Responsive.css'
// Components
import SiteTabExample from './ComponentParts/SiteTabExample'

const SiteTabs = (props) => {
    // Default is first tab
    const [currentTab, setCurrentTab] = useState(0)

    // Tab Properties
    const tabs = props.tabs
    const numberOfTabs = props.tabs.length
    
    // Tabs border ("yes" if it will overflow)
    const tabsBorderLogic = props.border === "yes" ? "site-border": ""

    // Tabs
    const displayTabs = tabs.map((tab, index) => {
        // If selected add border to bottom
        const borderLogic = tabs.indexOf(tab) === currentTab ? 
            "2px solid rgb(30, 111, 250)" : ""

        // click sets tab to clicked tab
        const handleDisplayClick = () => setCurrentTab(tabs.indexOf(tab))
        
        return (
            <div key={index}
                className="site-single-tab site-span-1"
                style={{"borderBottom": borderLogic}}
                onClick={handleDisplayClick}
            >
                <h6 className="m-auto">{tab.title}</h6>
            </div>
        )
    })

    // Render Example
    const renderExample = props.example === "yes" ? 
        <SiteTabExample example={tabs[currentTab].example} />
        : 
        <></>
    

    return (
        <div className={`w-90 m-auto ${tabsBorderLogic}`}>
            <div className="site-grid site-tabs-row"
                style={{"gridTemplateColumns": `repeat(${numberOfTabs},1fr)`}}
            >
                {displayTabs}
            </div>
            <div className="site-tabs-display-content site-overflow">
                {tabs[currentTab].content}
                {renderExample}
            </div>
        </div>
      );

}

export default SiteTabs