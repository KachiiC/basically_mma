import React, {useState} from 'react'
// CSS
import './SiteTabs.css'
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

// Data Format: 
// const ExampleData = {
//     "title": "",
//     "example": "",
//     "content": "",
//     "noteable_examples": "" <-- youtube_id
// }
//
// Usage Example: 
// <SiteTabs 
//  tabs={ExampleData}
//  tab_size="3" <-- size of each tab
//  grid_size="12" <-- total of all tabs
//  example="yes" <-- if yes, all must have an example
// />
    
const SiteTabs = (props) => {

    const [currentTab, setCurrentTab] = useState(0)
    const [smallTabIndex, setSmallTabIndex] = useState((0))
    
    const tabs = props.tabs
    const overflowLogic = props.overflow === "yes" ? 
    {
        "overflowY": "scroll"
    } : {
            "overflowY": "hidden"
        }


    const displayTabs = tabs.map(
        (tab, index) => {
            const borderLogic = tabs.indexOf(tab) === currentTab ? 
            "2px solid rgb(30, 111, 250)": "none"
        
            return (
                <div className="site-single-tab"
                    key={index}
                    onClick={() => setCurrentTab(tabs.indexOf(tab))}
                    style={
                        {
                            "gridColumn": `span ${props.tab_size}`,
                            "borderBottom": borderLogic
                        }
                    }
                >
                    <h6>{tab.title}</h6>
                </div>
            )
        }
    )

    const allSmallSiteTabs = tabs.map(
        (tab, index) => (
            <div className="small-site-tab"
                key={index}
                onClick={() => setCurrentTab(tabs.indexOf(tab))}
            >
                <h6>{tab.title}</h6>
            </div>
        )
    )

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

    const renderExample = props.example === "yes" ? (
        <div className="site-tab-example-container">
            <h5>Here is an example for you!</h5>
            <SiteYoutubeVideo 
                youtube_id={tabs[currentTab].example} 
            />
        </div>
    ): (
        <>
        </>
    )

    return (
        <div className="site-tabs-component-container">
            <div 
                className="site-tabs-component-row"
                style={
                    {
                        "gridTemplateColumns": `repeat(${props.grid_size},1fr)`
                    }
                }
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
                {renderExample}
            </div>
        </div>
      );

}

export default SiteTabs