import React from 'react'
import AntdTabs from 'Components/ExternalComponents/AntdTabs'
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'

const About = (
    <>
    <h1>About</h1>
    <AntdTabs data={FightStrategiesData}/>
    </>
)

export default About