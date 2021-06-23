import React from 'react'
// Components
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from 'SiteRedux/SiteReducers/actions';
import SiteTimeline from 'Components/MyComponents/SiteTimeline/index.d'
// Data
import TimelineData from 'Data/Basics/HistoryOfMMA/TimelineData'
import SiteLinkLargeButton from 'SiteCss/SiteLinkLargeButton'


const mapDispatchToProps = {
    dispatchShowModal: showModal,
};
  
const connector = connect(undefined, mapDispatchToProps);
  
type AppProps = {} & ConnectedProps<typeof connector>;

const HistoryTimelineModal = (props: AppProps) => {

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

export default connector(HistoryTimelineModal);