import React from 'react'
// Icon
import SiteIcon from 'SiteImages/myicon.jpg'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'

const SiteSidebarHeader = (

    <div className="sidebar-section sidebar-introduction">
        <SiteSectionTitle title="Basically MMA" width={100}/>
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