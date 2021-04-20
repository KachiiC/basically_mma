import React, { useState } from 'react'
// Components
import SiteModal from 'Components/SiteModal'
import SiteTimeline from 'Components/SiteTimeline'
// Data
import timelineData from 'Data/Basics/HistoryOfMMA/HistoryOfMMA'
import SiteLinkLargeButton from 'SiteCss/SiteLinkLargeButton'

const HistoryTimelineModal = () => {
    
    const [showModal, setShowModal] = useState(false)
    
    const handleClick = () => showModal === false ? 
        setShowModal(true): 
        setShowModal(false)
    
    return (
        <div className="history-of-modern-mma">
            <h5>For a more comprehensive history of modern MMA check out out history MMA timeline!</h5>
            <SiteLinkLargeButton 
                click={handleClick} 
                text="Timeline of MMA" 
            />
            {showModal && 
                (
                    <SiteModal closeModal={handleClick}>
                        <div className="history-modal site-span-12">
                            <SiteTimeline data={timelineData} />
                        </div>
                    </SiteModal>
                )
            }
        </div>

    )
}

export default HistoryTimelineModal