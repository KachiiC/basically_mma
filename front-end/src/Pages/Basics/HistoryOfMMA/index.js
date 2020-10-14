import React from 'react'
// CSS
import './index.css'
// Sections
import Timeline from './timeline'
import Introduction from './introduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const HistoryOfMMA = () => (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Timeline />
            </div>
            <SiteSidebarLong />
        </div>
    );

export default HistoryOfMMA;