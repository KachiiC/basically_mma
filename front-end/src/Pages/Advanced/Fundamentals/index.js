import React from 'react'
// CSS
import './Fundamentals.css'
// Components
import FundamentalsIntroduction from './Components/FundamentalsIntroduction'
import FundamentalCards from './Components/FundamentalCards'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'

const Fundamentals = () => (
     
    <div className="site-row">
        <div className="main-container">
            <h1>Fundamentals</h1>
            <FundamentalsIntroduction />
            <FundamentalCards />
        </div>
        <SiteSidebarLong videos="3" news="3"/>
    </div>

)

export default Fundamentals