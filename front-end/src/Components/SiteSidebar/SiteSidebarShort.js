import React from 'react'
// Components
import SiteSignature from "./SidebarSections/SiteSignature"
import MMAHighlights from './SidebarSections/MMAHighlights'

function SiteSidebarShort() {

    return (
        <div className="sidebar-container">
            <SiteSignature />
            <MMAHighlights />
        </div>
    )
}

export default SiteSidebarShort