import React from 'react'
// CSS 
import "./SiteSidebar.css"
//Components
import MMANews from './SidebarSections/MMANews'
import MMAHighlights from './SidebarSections/MMAHighlights'
import SiteFightSuggestions from './SidebarSections/SiteFightSuggestion'

const SiteSidebar = (props) => {

    const input_videos = props.videos
    const input_news = props.news 

    const displayedSiteSidebar = props.long === "yes" ? (
        <>
            <SiteFightSuggestions/>
            <MMAHighlights number_of_videos={input_videos}/>
            <MMANews number_of_articles={input_news} />
        </>
    ):(
        <>
            <SiteFightSuggestions />
            <MMAHighlights number_of_videos={input_videos}/>
        </>
    )

    return (
        <div className="sidebar-container">
            {displayedSiteSidebar}
        </div>
    )
    
}

export default SiteSidebar