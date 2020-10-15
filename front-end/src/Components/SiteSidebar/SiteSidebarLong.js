import React from 'react'
//Components
import MMANews from './SidebarSections/MMANews'
import TwitterWidget from './SidebarSections/TwitterWidget'
// import MMAHighlights from './SidebarSections/MMAHighlights'
import SiteSignature from './SidebarSections/SiteSignature'

const SiteSidebarLong = () => (
    
    <div className="sidebar-container">
        <SiteSignature />
        {/* <MMAHighlights /> */}
        <MMANews />
        <TwitterWidget />
    </div>
    
)

export default SiteSidebarLong