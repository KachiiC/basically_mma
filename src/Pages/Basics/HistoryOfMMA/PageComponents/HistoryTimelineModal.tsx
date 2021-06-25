import React from 'react'
// Components
import SiteTimeline from 'Components/MyComponents/SiteTimeline/index.d'
import { modalProps } from 'SiteRedux/SiteModal/ReduxModalProps'
import { modalConnector } from 'SiteRedux/SiteModal/ReduxModalProps'
// Data
import TimelineData from 'Data/Basics/HistoryOfMMA/TimelineData'
import SiteLinkLargeButton from 'SiteCss/SiteLinkLargeButton'


const HistoryTimelineModal = (props: modalProps) => {

    const { dispatchShowModal } = props;
    
    const handleClick = () => dispatchShowModal({
        content: modalContent
    })

    const modalContent = (
        <div className={`history-modal site-span-12`}>
            <SiteTimeline data={TimelineData} />
        </div>
    )
    
    return (
        <div className="history-of-modern-mma">
            <h5>For a more comprehensive history of modern MMA check out out history MMA timeline!</h5>
            <SiteLinkLargeButton 
                click={handleClick} 
                text="Timeline of MMA" 
            />
        </div>

    )
}

export default modalConnector(HistoryTimelineModal);