import React from 'react'
// Data
import HomeRecommendedCards from 'Data/Other/Home/HomeRecommendedCards'
// Components
import SiteArticlesCard from 'Components/SiteArticlesCard'

const HomeCardComponents = () =>

    <SiteArticlesCard data={HomeRecommendedCards} title="Recommended Reading" />


export default HomeCardComponents