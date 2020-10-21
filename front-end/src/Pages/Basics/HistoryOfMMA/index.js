import React from 'react'
// CSS
import './HistoryOfMMA.css'
// Sections
import Timeline from './Components/Timeline'
import Introduction from './Components/HistoryOfMMAIntroduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const HistoryOfMMA = () => (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Timeline />
            </div>
            <SiteSidebarLong videos="20" news="14" />
        </div>
    );

export default HistoryOfMMA;