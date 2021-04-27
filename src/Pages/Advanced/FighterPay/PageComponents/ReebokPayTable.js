import React from 'react'
// Data
// Components
import { Table } from 'antd';
import { ReebokPayTableColumns, ReebokPayData } from 'Data/Advanced/FighterPay/FighterPay'

const ReebokPayTable = (

    <div className="reebok-table">
        <h6 class="text-center">Reebok pay</h6>
        <Table 
            columns={ReebokPayTableColumns} 
            dataSource={ReebokPayData} 
            pagination={false}
        />
    </div>
    
)

export default ReebokPayTable