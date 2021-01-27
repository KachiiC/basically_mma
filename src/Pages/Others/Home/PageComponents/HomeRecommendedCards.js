import React from 'react'
// Data
import HomeRecommendedCardsData from 'Data/Other/Home/HomeRecommendedCardsData'
// Components
import SiteCards from 'Components/SiteCards'

const HomeCardComponents = () =>

    <SiteCards 
        data={HomeRecommendedCardsData} 
        title="Recommended Reading" 
    />


export default HomeCardComponents