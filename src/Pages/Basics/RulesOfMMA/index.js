import React from 'react'
// CSS
import './RulesOfMMA.css'
import './Responsive.css'
// Data
import RulesData from 'Data/Basics/RulesOfMMA/RulesOfMMA'
// Components
import AntdTabs from 'Components/ExternalComponents/AntdTabs'

const RulesOfMMA = (
    <>
        <AntdTabs data={RulesData} 
            width="90"
            size="large"
            overflow
        />
    </>
)

export default RulesOfMMA