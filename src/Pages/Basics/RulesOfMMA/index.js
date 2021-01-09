import React from 'react'
// CSS
import './RulesOfMMA.css'
// Components
import RulesOfMMAIntroduction from 'Data/Basics/RulesOfMMA/RulesOfMMAIntroduction'
import RulesCards from './RulesCards'
import WeightClassRules from './WeightClassRules'
import FoulRules from './FoulRules'

const RulesOfMMA = () => (

    <>
        <RulesOfMMAIntroduction />
        <FoulRules />
        <WeightClassRules />
        <RulesCards />
    </>

)

export default RulesOfMMA