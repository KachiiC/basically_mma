import React from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import SiteTabs from 'Components/SiteTabs'

const FundamentalCards = () => 
    <SiteTabs 
        tabs={fundamentalsData}
    />

export default FundamentalCards