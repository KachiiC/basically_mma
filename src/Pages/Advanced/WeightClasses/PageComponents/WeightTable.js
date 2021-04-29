import React from "react"
// Data
import WeightData from "Data/Advanced/WeightClasses/WeightTableData"
//Components
import AntdTable from 'Components/ExternalComponents/AntdTable'

const WeightTable = () => {

  const table_title = "The Unified Rules of MMA Weight Classes"

  return (
    <AntdTable
      columns={WeightData.WeightColumns} 
      data={WeightData.WeightData}
      captions={WeightData.WeightCaptions}
      pagination={false}
      title={table_title}
      filter="yes"
    />
  )
}


export default WeightTable;