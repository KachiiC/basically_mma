import React from 'react'
// Components
// import SiteSignature from "./SidebarSections/SiteSignature"
import MMAHighlights from './SidebarSections/MMAHighlights'
import SiteFightSuggestions from './SidebarSections/SiteFightSuggestion'

const SiteSidebarShort = (props) => {

    const input_videos = props.videos

    return (
        <div className="sidebar-container">
            <SiteFightSuggestions />
            <MMAHighlights number_of_videos={input_videos}/>
        </div>
    )

}


export default SiteSidebarShort