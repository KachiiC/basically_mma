import React from 'react'
// CSS
import './SiteMainContainer.css'
// Components
import SiteSidebar from 'SiteCss/SiteSidebar'

const SiteMainContainer = (props) => (

    <div className="site-grid-container">
        <main>
            {props.main_display}
        </main>
        <SiteSidebar />
    </div>

)
    


export default SiteMainContainer