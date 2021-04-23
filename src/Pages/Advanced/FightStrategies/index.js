import React from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
// Components
import SiteTabs from 'Components/SiteTabs'


const FightStrategies = () => 
    <SiteTabs 
        tabs={FightStrategiesData} 
        example="yes" 
        shadow="yes"
        min_height={575}
    />


export default FightStrategies