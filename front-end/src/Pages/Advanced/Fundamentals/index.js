import React from 'react'
// Components
import FundamentalCards from './FundamentalCards'
import FundamentalsIntroduction from './Introduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'

function Fundamentals () {


    return (
        <div className="site-row">
            <div className="main-container">
                <h1>Fundamentals</h1>
                <FundamentalsIntroduction />
                <FundamentalCards />
            </div>
            <SiteSidebarLong />
        </div>

    )
}
export default Fundamentals