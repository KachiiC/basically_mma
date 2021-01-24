import React from 'react'
// CSS
import './SiteMainContainer.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => {

    return (
        <div className="site-grid-container">
            <main>
                {props.introduction}
                {props.example_video}
                {props.main_display}
            </main>
            <SiteSidebar />
        </div>
    )

}

    


export default SiteMainContainer