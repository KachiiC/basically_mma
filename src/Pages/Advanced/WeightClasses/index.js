import React from 'react'
// CSS
import './WeightClasses.css'
// Components
import WeightTable from './PageComponents/WeightTable'
import WeightCutConsiderations from './PageComponents/WeightClassConsiderations'
import WeightCutProsAndCons from './PageComponents/WeightCutProsCons'
import OutsideOfUS from './PageComponents/OutsideOfUS'
import OneChampionshipWeight from './PageComponents/OneChampionshipWeight'

const WeightClasses = (
    <>
        {WeightTable}
        {WeightCutConsiderations}
        {WeightCutProsAndCons}
        {OutsideOfUS}
        {OneChampionshipWeight}
    </>
)

export default WeightClasses 