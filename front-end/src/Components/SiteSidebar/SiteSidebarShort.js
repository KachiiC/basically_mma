import React from 'react'
// Components
import SiteSignature from "./SidebarSections/SiteSignature"
import MMAHighlights from './SidebarSections/MMAHighlights'

const SiteSidebarShort = () => (
        <div className="sidebar-container">
            <SiteSignature />
            <MMAHighlights />
        </div>
    )

export default SiteSidebarShort