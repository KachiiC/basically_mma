import React from 'react'
// CSS
import './WeightClasses.css'
// Components
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'
import WeightClassesIntroduction from './Components/WeightClassesIntroduction'
import WeightCutProsAndCons from './Components/WeightCutProsCons'
import WeightTable from './Components/WeightTable'
import WeightCutConsiderations from './Components/WeightClassConsiderations'
import OneChampionshipWeight from './Components/OneChampionshipWeight'
import OutsideOfUS from './Components/OutsideOfUS'


const WeightClasses = () => (

    <div className="site-row">
        <div className="main-container">
            <WeightClassesIntroduction />
            <WeightTable />
            <WeightCutConsiderations />
            <WeightCutProsAndCons />
            <OutsideOfUS />
            <OneChampionshipWeight />
        </div>
        <SiteSidebarLong videos="9" news="9"/>
    </div>
    
)

export default WeightClasses 