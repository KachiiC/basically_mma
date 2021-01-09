import React from 'react'
// CSS
import './RulesOfMMA.css'
// Components
import RulesCards from './PageComponents/RulesCards'
import WeightClassRules from './PageComponents/WeightClassRules'
import FoulRules from './PageComponents/FoulRules'

const RulesOfMMA = () => (

    <>
        <FoulRules />
        <WeightClassRules />
        <RulesCards />
    </>

)

export default RulesOfMMA