import React from 'react'
import './SiteSidebar.css'
import SiteSidebarHeader from './SiteSidebarSections/SiteSidebarHeader'
import SiteSidebarHighlights from './SiteSidebarSections/SiteSidebarHighlights'

const SiteSidebar = () => {

    return (
        <aside>
            <div className="site-sidebar">
                <SiteSidebarHeader />
                <SiteSidebarHighlights />
            </div>
        </aside>
    )
}

export default SiteSidebar