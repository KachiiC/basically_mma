import React from 'react'
// CSS
import './SiteMainContainer.css'
import './Responsive.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => {

    // Header Image
    const imageLogic = () => {
        if (props.header_image) {
            return (
                <div className="header-image-container w-100">
                    <img className="main-container-pic w-100"
                        alt="page_header" 
                        src={props.header_image}
                    />
                </div>
            )
        }
    }

    // Sidebar Logic
    const pageSpan = props.sidebar ? 8 : 12

    const sidebarLogic = () => {
        if (props.sidebar === true) {
            return <SiteSidebar />
        }
    }

    const videoLogic = () => {
        if (props.example_video) {
            return props.example_video 
        }
    }
    
    return (
        <>
            {imageLogic()}
            <div className="site-grid-system">
                <main className={`site-span-${pageSpan} w-100`}>
                    <h1 className="page-title">
                        {props.title}
                    </h1>
                    {props.introduction}
                    {videoLogic()}
                    {props.main_display}
                </main>
                {sidebarLogic()}
            </div>
        </>
    )
    
}

    


export default SiteMainContainer