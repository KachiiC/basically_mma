import React from 'react'
// CSS
import './RulesOfMMA.css'
import './Responsive.css'
// Data
import RulesData from 'Data/Basics/RulesOfMMA/RulesOfMMA'
// Components
import MaterialUITabs from 'Components/ExternalComponents/MaterialUITabs'

const RulesOfMMA = () => <MaterialUITabs data={RulesData} width="90"/>

export default RulesOfMMA