import React, {useState} from 'react'
import './SiteTabs.css'
const SiteTabs = (props) => {

    const tabs = props.tabs
    const [currentTab, setCurrentTab] = useState(0)

    const displayTabs = tabs.map((tab, index) => (
        <div className="site-single-tab" 
            key={index}
            onClick={() => setCurrentTab(tabs.indexOf(tab))}
        >
            <h6>{tab.title}</h6>
        </div>
    ))

    return (
        <div className="site-tabs-component-container">
            <div className="site-tabs-component-row">
                {displayTabs}
            </div>
            <div className="site-tabs-display-content">
                {tabs[currentTab].content}
                <p><b>Noteable Examples:</b> {tabs[currentTab].noteable_examples}</p>
                <div className="site-tab-example-video-container">
                    <iframe 
                        className="site-tab-example-video"
                        src={`https://www.youtube.com/embed/${tabs[currentTab].example}`}
                        frameborder="0" 
                        title="example_tab"
                        allowFullScreen 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                    />
                </div>
            </div>

        </div>
      );

}

export default SiteTabs