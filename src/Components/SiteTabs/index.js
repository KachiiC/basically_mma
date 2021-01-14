import React, {useState} from 'react'
// CSS
import './SiteTabs.css'
// Components
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const SiteTabs = (props) => {

    const [currentTab, setCurrentTab] = useState(0)
    const [smallTabIndex, setSmallTabIndex] = useState((0))
    
    const tabs = props.tabs
    const overflowLogic = props.overflow === "yes" ? {"overflow-y": "scroll"} 
    : {"overflow-y": "hidden"}


    const displayTabs = tabs.map((tab, index) => {
        
        const borderLogic = tabs.indexOf(tab) === currentTab ? "2px solid rgb(30, 111, 250)": ""
        
        return (
            <div className="site-single-tab"
                    key={index}
                    onClick={() => setCurrentTab(tabs.indexOf(tab))}
                    style={
                        {
                            "grid-column": `span ${props.tab_size}`,
                            "border-bottom": borderLogic
                        }
                    }
                >
                    <h6>{tab.title}</h6>
                </div>
            )
    })

    const allSmallSiteTabs = tabs.map((tab, index) => (
        <div className="small-site-tab"
            onClick={() => setCurrentTab(tabs.indexOf(tab))}
            key={index}
        >
            <h6>{tab.title}</h6>
        </div>
    ))

    const displayedSmallSiteTabs = (
        <>
            {allSmallSiteTabs[smallTabIndex]}
            {allSmallSiteTabs[smallTabIndex + 1]}
            {allSmallSiteTabs[smallTabIndex + 2]}
        </>
    )

    const handlePrev = () => {
        smallTabIndex === 0 ? setSmallTabIndex(4):
        setSmallTabIndex(smallTabIndex - 1)
    }
    
    const handleNext = () => {
        smallTabIndex === 4 ? setSmallTabIndex(0):
        setSmallTabIndex(smallTabIndex + 1)
    }

    return (
        <div className="site-tabs-component-container">
            <div 
                className="site-tabs-component-row"
                style={{"grid-template-columns": `repeat(${props.grid_size},1fr)`}}
            >
                {displayTabs}
                <div className="small-site-tabs-button"
                    onClick={handlePrev}
                >
                    <FontAwesomeIcon icon={faAngleDoubleLeft}
                        size="2x" 
                        className="tab-prev-button"
                    />
                </div>
                {displayedSmallSiteTabs}
                <div className="small-site-tabs-button"
                    onClick={handleNext}
                >
                    <FontAwesomeIcon icon={faAngleDoubleRight}
                        size="2x" 
                        className="tab-next-button"
                    />
                </div>
            </div>
            <div className="site-tabs-display-content"
                style={overflowLogic}
            >
                {tabs[currentTab].content}
            </div>
        </div>
      );

}

export default SiteTabs