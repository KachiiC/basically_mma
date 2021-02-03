import React from 'react'
// CSS
import './SiteMainContainer.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => {
    
    const imageLogic = props.header_image ? 
        props.header_image 
        :
        "http://via.placeholder.com/540x300.png?text=Placeholder"

    return (
        <div className="site-grid-container">
            <main>
                <h1 className="site-page-title">
                    {props.title}
                </h1>
                <div className="site-page-header-image-container">
                    <img className="site-responsive-image"
                        alt="page_header" 
                        src={imageLogic}
                    />
                </div>
                {props.introduction}
                {props.example_video}
                {props.main_display}
            </main>
            <SiteSidebar />
        </div>
    )
    
}

    


export default SiteMainContainer