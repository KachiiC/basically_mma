import React from 'react'
// CSS
import './Fundamentals.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import FundamentalsIntroduction from './PageComponents/FundamentalsIntroduction'
import FundamentalCards from './PageComponents/FundamentalCards'

const Fundamentals = () => (
    
        <MainAndSidebar long="yes" videos="3" news="3">
            <h1>Fundamentals</h1>
            <FundamentalsIntroduction />
            <FundamentalCards />
        </MainAndSidebar>

)

export default Fundamentals