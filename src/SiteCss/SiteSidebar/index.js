import React from 'react'
// CSS 
import './SiteSidebar.css'
// Components
import SiteSidebarHeader from './SiteSidebarSections/SiteSidebarHeader'
import SiteSidebarHighlights from './SiteSidebarSections/SiteSidebarHighlights'

const SiteSidebar = () => (

    <aside>
        <div className="site-sidebar">
            <SiteSidebarHeader />
            <SiteSidebarHighlights />
        </div>
    </aside>
    
)

export default SiteSidebar