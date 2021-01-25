import React from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import SiteTabs from 'Components/SiteTabs'

const FundamentalCards = () => 
<SiteTabs 
    tabs={fundamentalsData} 
    tab_size="2" 
    grid_size="12" 
/>

export default FundamentalCards