import React from 'react'
// CSS
import './MMAPromotions.css'
// Components
import PromotionsIntroduction from './Components/PromotionsIntroduction'
import PromotionsTimeline from './Components/PromotionsTimeline'
import PromotionsToday from './Components/PromotionsToday'
import PromotionsCards from './Components/PromotionsCards'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'

const MMAPromotions = () => (

    <div className="site-row">
        <div className="main-container">
            <PromotionsIntroduction />
            <PromotionsTimeline />
            <PromotionsToday />
            <PromotionsCards />
        </div>
        <SiteSidebarLong videos="5" news="5"/>
    </div>

)

export default MMAPromotions