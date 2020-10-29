import React from 'react'
// CSS
import './RulesOfMMA.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import RulesOfMMAIntroduction from './PageComponents/RulesOfMMAIntroduction'
import Tabs from './PageComponents/Tabs'


const RulesOfMMA = () => (

    <MainAndSidebar videos="5">
        <RulesOfMMAIntroduction />
        <Tabs />
    </MainAndSidebar>

)

export default RulesOfMMA