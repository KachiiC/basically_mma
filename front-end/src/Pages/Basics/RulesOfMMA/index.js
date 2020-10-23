import React from 'react'
// CSS
import './RulesOfMMA.css'
// Components
import RulesOfMMAIntroduction from './Components/RulesOfMMAIntroduction'
import Tabs from './Components/Tabs'
import SiteSidebarShort from '../../../Components/SiteSidebar/SiteSidebarShort'


const RulesOfMMA = () => (
        <div className="site-row">
            <div className="main-container">
                <RulesOfMMAIntroduction />
                <Tabs />
            </div>
            <SiteSidebarShort videos="5"/>
        </div>
    )

export default RulesOfMMA