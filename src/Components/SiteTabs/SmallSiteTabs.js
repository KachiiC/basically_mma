import React from 'react'
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const SmallSiteTabs = () => {

        // SMALL TABS
        const allSmallSiteTabs = tabs.map(
            (tab, index) => (
                <div className="small-site-tab"
                    key={index}
                    onClick={
                        () => setCurrentTab(tabs.indexOf(tab))
                    }
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
            smallTabIndex === 0 ? setSmallTabIndex(tabs.length -1):
            setSmallTabIndex(smallTabIndex - 1)
        }
        
        const handleNext = () => {
            smallTabIndex === smallTabIndex + 3 ? setSmallTabIndex(0):
            setSmallTabIndex(smallTabIndex + 1)
        }

    return (
        <div className="small-site-tabs-button" onClick={handlePrev}>
            <FontAwesomeIcon icon={faAngleDoubleLeft}
                size="2x" 
                className="tab-prev-button"
            />
        </div>
        {displayedSmallSiteTabs}
        <div className="small-site-tabs-button" onClick={handleNext}>
            <FontAwesomeIcon icon={faAngleDoubleRight}
                size="2x" 
                className="tab-next-button"
            />
        </div>
    )
}

export default SmallSiteTabs