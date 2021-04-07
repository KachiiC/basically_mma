import React from 'react'
// CSS 
import './SiteSidebar.css'
import './Responsive.css'
// Components
import SiteSidebarHeader from './SiteSidebarSections/SiteSidebarHeader'
import SiteSidebarHighlights from './SiteSidebarSections/SiteSidebarHighlights'

const SiteSidebar = () => (

    <aside class="w-80 site-span-4">
        <div className="site-sidebar">
            <SiteSidebarHeader />
            <SiteSidebarHighlights />
        </div>
    </aside>
    
)

export default SiteSidebar