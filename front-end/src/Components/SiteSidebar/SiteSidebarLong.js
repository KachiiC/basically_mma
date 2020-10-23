import React from 'react'
// CSS 
import "./SiteSidebar.css"
//Components
import MMANews from './SidebarSections/MMANews'
import MMAHighlights from './SidebarSections/MMAHighlights'
import SiteSignature from './SidebarSections/SiteSignature'

const SiteSidebarLong = (props) => {

    const input_news = props.news
    const input_videos = props.videos

    return (
        <div className="sidebar-container">
            <SiteSignature />
            <MMAHighlights number_of_videos={input_videos}/>
            <MMANews number_of_articles={input_news} />
        </div>

    )
}

export default SiteSidebarLong