import React from 'react'
//CSS
import './index.css'
//Components
import MMANews from './MMANews'
import TwitterWidget from './TwitterWidget'
import MMAHighlights from './MMAHighlights'
import SiteSignature from './SiteSignature'

function SiteSidebar () {
    return (
        <div className="sidebar-container">
            <SiteSignature />
            <MMAHighlights />
            <MMANews />
            <TwitterWidget />
        </div>
    )
}
export default SiteSidebar