import React from 'react'
// CSS
import './WeightClasses.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import WeightClassesIntroduction from './PageComponents/WeightClassesIntroduction'
import WeightTable from './PageComponents/WeightTable'
import WeightCutConsiderations from './PageComponents/WeightClassConsiderations'
import WeightCutProsAndCons from './PageComponents/WeightCutProsCons'
import OutsideOfUS from './PageComponents/OutsideOfUS'
import OneChampionshipWeight from './PageComponents/OneChampionshipWeight'



const WeightClasses = () => (
    
    <MainAndSidebar long="yes" videos="9" news="9">
            <WeightClassesIntroduction />
            <WeightTable />
            <WeightCutConsiderations />
            <WeightCutProsAndCons />
            <OutsideOfUS />
            <OneChampionshipWeight />
    </MainAndSidebar>
    
)

export default WeightClasses 