import React from 'react'
// Components
import SiteSignature from "./SidebarSections/SiteSignature"
import MMAHighlights from './SidebarSections/MMAHighlights'

const SiteSidebarShort = (props) => {

    const input_videos = props.videos

    return (
        <div className="sidebar-container">
            <SiteSignature />
            <MMAHighlights number_of_videos={input_videos}/>
        </div>
    )

}


export default SiteSidebarShort