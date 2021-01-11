import React from 'react'
// CSS
import './HistoryOfMMA.css'
import HistoryOfMMAVideo from './PageComponents/HistoryOfMMAVideo';
// Components
import HistoryTimelineModal from './PageComponents/HistoryTimelineModal';

const HistoryOfMMA = () => (
    <>
        <HistoryOfMMAVideo />
        <HistoryTimelineModal />
    </>
)

export default HistoryOfMMA;