import React from 'react'
import SiteTabs from 'Components/SiteTabs'
// CSS
import './Fundamentals.css'
// Components
import FundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'

const Fundamentals = () => (
    <SiteTabs tabs={FundamentalsData}                                 
        grid_size="14" 
        tab_size="2"
    />
    
)

export default Fundamentals