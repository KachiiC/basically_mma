import React from 'react'
// CSS
import './SiteMainContainer.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => (

    <div className="site-grid-container">
        <main>
            <h1 className="site-page-title">
                {props.title}
            </h1>
            {props.introduction}
            {props.main_display}
            {props.example_video}
        </main>
        <SiteSidebar />
    </div>
    
)

    


export default SiteMainContainer