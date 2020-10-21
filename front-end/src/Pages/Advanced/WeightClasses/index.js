import React from 'react'
// CSS
import './WeightClasses.css'
// Components
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'
import WeightClassesIntroduction from './Components/WeightClassesIntroduction'
import WeightCutProsAndCons from './Components/WeightCutProsCons'
import WeightTable from './Components/WeightTable'
import WeightCutConsiderations from './Components/WeightClassConsiderations'


const WeightClasses = () => (

    <div className="site-row">
        <div className="main-container">
            <WeightClassesIntroduction />
            <WeightTable />
            <WeightCutProsAndCons />
            <WeightCutConsiderations />
        </div>
        <SiteSidebarLong videos="3" news="3"/>
    </div>
    
)

export default WeightClasses 