import React from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
import AntdTabs from 'Components/ExternalComponents/AntdTabs'
// CSS
import './FightStrategies.css'
// Components
// import SiteTabs from 'Components/SiteTabs'


const FightStrategies = () => (
    <div className="fight-strat-tabs">
        <AntdTabs data={FightStrategiesData} />
    </div>
)


export default FightStrategies