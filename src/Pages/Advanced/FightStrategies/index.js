import React from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
// COMPONENTS
import AntdTabs from 'Components/ExternalComponents/AntdTabs'

const FightStrategies = (
    <div className="fight-strat-tabs">
        <AntdTabs data={FightStrategiesData} />
    </div>
)


export default FightStrategies