import React from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
// Components
import SiteTabs from 'Components/SiteTabs'


const FightStrategies = () => (

    <SiteTabs 
        tabs={FightStrategiesData}
        grid_size="13" 
        tab_size="3"
        example="yes"
    />

)

export default FightStrategies