import React, { useState } from 'react'
// Components
import SiteModal from 'Components/SiteModal'
import SiteTimeline from 'Components/SiteTimeline'
// Data
import timelineData from 'Data/Basics/HistoryOfMMA/timelineData'

const HistoryTimelineModal = () => {
    
    const [showModal, setShowModal] = useState(false)
    
    const handleClick = () => showModal === false ? 
        setShowModal(true): 
        setShowModal(false)
    
    return (
        <div className="history-of-modern-mma-container">
            <h5>For a more comprehensive history of modern MMA check out out history MMA timeline!</h5>
            <div className="history-of-mma-button" 
                onClick={handleClick}
            >
                The timeline of modern MMA
            </div>
            {showModal && (
                    <SiteModal closeModal={handleClick}>
                        <div className="history-of-mma-modal">
                            <SiteTimeline data={timelineData} />
                        </div>
                    </SiteModal>
                )
            }
        </div>

    )
}

export default HistoryTimelineModal