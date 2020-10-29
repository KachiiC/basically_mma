import React from 'react'
// Components
import SiteSidebar from 'Components/SiteSidebar'


const MainAndSidebar = (props) => {

    const videos = props.videos
    const long = props.long
    const news = props.news
    
    return (
        <div className="site-row">
            <div className="main-container">
                {props.children}
            </div>
            <SiteSidebar long={long} videos={videos} news={news} />
        </div>

    )

}
    


export default MainAndSidebar