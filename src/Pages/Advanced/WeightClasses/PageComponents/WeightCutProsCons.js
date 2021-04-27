import React from 'react'
// Data
import WeightCutProsCons from 'Data/Advanced/WeightClasses/WeightProsConsData'
// Components
import SemanticUITable from 'Components/ExternalComponents/SemanticUITable'

const WeightCutProsAndCons = (
    <SemanticUITable 
        title="Pros and Cons of Weight Cutting"
        data={WeightCutProsCons}
    />
)

export default WeightCutProsAndCons