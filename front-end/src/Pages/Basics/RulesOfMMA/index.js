import React from 'react'
// CSS
import './index.css'
// Components
import Introduction from './Tabs/Introduction'
import Tabs from './Tabs'
import SiteSidebarShort from '../../../Components/SiteSidebar/SiteSidebarShort'



function RulesOfMMA () {

    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Tabs />
            </div>
            <SiteSidebarShort />
        </div>
    )

}

export default RulesOfMMA