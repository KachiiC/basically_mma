import React from 'react'
// CSS
import './MMAPromotions.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import PromotionsIntroduction from './PageComponents/PromotionsIntroduction'
import PromotionsTimeline from './PageComponents/PromotionsTimeline'
import PromotionsToday from './PageComponents/PromotionsToday'
import PromotionsCards from './PageComponents/PromotionsCards'

const MMAPromotions = () => (
        
        <MainAndSidebar long="yes" videos="5" news="5">
            <PromotionsIntroduction />
            <PromotionsTimeline />
            <PromotionsToday />
            <PromotionsCards />
        </MainAndSidebar>

)

export default MMAPromotions