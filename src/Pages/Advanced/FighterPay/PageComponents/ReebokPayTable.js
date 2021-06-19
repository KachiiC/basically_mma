import React from 'react'
// Data
// Components
import AntdTable from 'Components/ExternalComponents/AntdTable'
import { ReebokPayTableColumns, ReebokPayData } from 'Data/Advanced/FighterPay/FighterPay'

const ReebokPayTable = (

    <AntdTable 
        columns={ReebokPayTableColumns} 
        dataSource={ReebokPayData} 
        pagination={false}
        title="Reebok Pay Table"
    />
    
)

export default ReebokPayTable