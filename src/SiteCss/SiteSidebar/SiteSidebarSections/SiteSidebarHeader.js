import React from 'react'
// Icon
import SiteIcon from 'SiteImages/myicon.jpg'

const SiteSidebarHeader = () => (

    <div className="site-sidebar-introduction site-sidebar-section">
        <div className="site-sidebar-title">
            Basically MMA
        </div>
        <div className="site-sidebar-icon-container">
            <img src={SiteIcon}
                className="site-sidebar-icon"
                alt="basically_mma_icon"
            />
        </div>
        <p>Every martial artist begins as a white belt.</p>
    </div>
)

export default SiteSidebarHeader