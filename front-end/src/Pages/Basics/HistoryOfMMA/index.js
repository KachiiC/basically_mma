import React from 'react'
// CSS
import './index.css'
// Sections
import Timeline from './timeline'
import Introduction from './introduction'
import SiteSignature from '../../../Components/SiteSidebar/SiteSignature'
import MMANews from '../../../Components/SiteSidebar/MMANews'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import TwitterWidget from '../../../Components/SiteSidebar/TwitterWidget'


function HistoryOfMMA () {
    
    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Timeline />
            </div>
            <div className="sidebar-container">
                <SiteSignature />
                <MMANews/>
                <MMAHighlights />
                <TwitterWidget />
            </div>
        </div>
    );
}

export default HistoryOfMMA;