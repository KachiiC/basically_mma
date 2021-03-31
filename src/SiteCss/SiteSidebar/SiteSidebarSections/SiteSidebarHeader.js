import React from 'react'
// Icon
import SiteIcon from 'SiteImages/myicon.jpg'

const SiteSidebarHeader = () => (

    <div className="sidebar-section sidebar-introduction">
        <div className="sidebar-title">
            Basically MMA
        </div>
        <div className="w-50 m-auto">
            <img src={SiteIcon}
                className="sidebar-icon site-responsive-image"
                alt="basically_mma_icon"
            />
        </div>
        <p>Every martial artist begins as a white belt.</p>
    </div>
)

export default SiteSidebarHeader