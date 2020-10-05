import React from 'react'
// CSS
import './index.css'
// Components
import Introduction from './Tabs/Introduction'
import Tabs from './Tabs'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import MMANews from '../../../Components/SiteSidebar/MMANews'


function RulesOfMMA () {

    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Tabs />
            </div>
            <div className="sidebar-container">
                <MMAHighlights />
                <MMANews />
            </div>
        </div>
    )

}

export default RulesOfMMA