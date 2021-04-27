import React from "react"
// Data
import WeightData from "Data/Advanced/WeightClasses/WeightTableData"
//Components
import AntdTable from 'Components/ExternalComponents/AntdTable'

const WeightTable = (

  <AntdTable
    columns={WeightData.WeightColumns} 
    data={WeightData.WeightData}
    captions={WeightData.WeightCaptions}
    pagination={false}
    title="The Unified Rules of MMA Weight Classes"
  />

)

export default WeightTable;