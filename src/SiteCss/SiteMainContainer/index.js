import React, { useState } from 'react'
// CSS
import './SiteMainContainer.css'
import './Responsive.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => {

    // Header Image
    const imageLogic = props.header_image ? (
        <div className="header-image-container w-100">
            <img className="main-container-pic w-100"
                alt="page_header" 
                src={props.header_image}
            />
        </div>
    ) : <></>

    // Sidebar Logic
    const pageSpan = props.sidebar ? 8 : 12

    const sidebarLogic = props.sidebar
        if (props.sidebar === true) {
            return <SiteSidebar />
        }
    
    
    return (
        <>
        {imageLogic}
        <div className="site-grid-system">
            <main className={`site-span-${pageSpan}`}>
                <h1 className="page-title">
                    {props.title}
                </h1>
                {props.introduction}
                {props.example_video}
                {props.main_display}
            </main>
            {sidebarLogic}
        </div>
        </>
    )
    
}

    


export default SiteMainContainer