import React from 'react'
// CSS
import './SiteMainContainer.css'
import './Responsive.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => {
    
    const imageLogic = props.header_image ? (
        <div className="site-page-header-image-container">
            <img className="main-container-pic"
                alt="page_header" 
                src={props.header_image}
                />
        </div>
    ) : <></>

    return (
        <div className="site-grid-container">
            <main>
                <h1 className="site-page-title">
                    {props.title}
                </h1>
                {imageLogic}
                {props.introduction}
                {props.example_video}
                {props.main_display}
            </main>
            <SiteSidebar />
        </div>
    )
    
}

    


export default SiteMainContainer