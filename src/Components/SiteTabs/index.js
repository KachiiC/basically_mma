import React, {useState} from 'react'
// CSS
import './SiteTabs.css'
import './Responsive.css'
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
//  example="yes" <-- if yes, all must have an example
// />
    
const SiteTabs = (props) => {

    const [currentTab, setCurrentTab] = useState(0)

    // Number of Tabs
    const numberOfTabs = props.tabs.length
    // Tabs Data
    const tabs = props.tabs

    // ???
    const overflowLogic = props.overflow === "yes" ? 
    {
        "overflowY": "scroll"
    } : {
            "overflowY": "hidden"
        }

    const displayTabs = tabs.map(
        (tab, index) => {
            // If selected add border to bottom
            const borderLogic = tabs.indexOf(tab) === currentTab ? 
            "2px solid rgb(30, 111, 250)" : 
            "none"
        
            return (
                <div className="site-single-tab"
                    onClick={() => setCurrentTab(tabs.indexOf(tab))}
                    style={
                        {
                            "gridColumn": `span ${numberOfTabs/numberOfTabs}`,
                            "borderBottom": borderLogic
                        }
                    }
                    key={index}
                >
                    <h6 className="m-auto">{tab.title}</h6>
                </div>
            )
        }
    )

    // Render Example
    const renderExample = props.example === "yes" ? (
        <div className="site-tab-example-container">
            <h5>Here is an example for you!</h5>
            <SiteYoutubeVideo 
                youtube_id={tabs[currentTab].example} 
            />
        </div>
    ): (
        <></>
    )

    return (
        <div className="w-90 m-auto">
            <div className="site-tabs-component-row"
                style={
                    {
                        "gridTemplateColumns": `repeat(${numberOfTabs},1fr)`
                    }
                }
            >
                {displayTabs}

            </div>
            <div className="site-tabs-display-content w-100 h-80" style={overflowLogic}>
                {tabs[currentTab].content}
                {renderExample}
            </div>
        </div>
      );

}

export default SiteTabs