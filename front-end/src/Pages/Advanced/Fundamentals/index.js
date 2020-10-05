import React from 'react'
// Components
import FundamentalCards from './FundamentalCards'
import FundamentalsIntroduction from './Introduction'
import SiteSignature from '../../../Components/SiteSidebar/SiteSignature'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import MMANews from '../../../Components/SiteSidebar/MMANews'

function Fundamentals () {


    return (
        <div className="site-row">
            <div className="main-container">
                <h1>Fundamentals</h1>
                <FundamentalsIntroduction />
                <FundamentalCards />
            </div>
            <div className="sidebar-container">
                <SiteSignature />
                <MMAHighlights />
                <MMANews />
            </div>
        </div>

    )
}
export default Fundamentals