import React from 'react'
// CSS
import './MMAPromotions.css'

// Components
import PromotionsIntroduction from './PageComponents/PromotionsIntroduction'
import PromotionsTimeline from './PageComponents/PromotionsTimeline'
import PromotionsToday from './PageComponents/PromotionsToday'
import PromotionsCards from './PageComponents/PromotionsCards'

const MMAPromotions = () => (
        
        <>
            <PromotionsIntroduction />
            <PromotionsTimeline />
            <PromotionsToday />
            <PromotionsCards />
        </>

)

export default MMAPromotions