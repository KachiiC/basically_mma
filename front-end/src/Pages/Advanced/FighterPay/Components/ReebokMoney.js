import React from 'react'
// Data
import ReebokPayData from '../../../../Data/Advanced/FighterPay/ReebokMoneyData'
// Components
import { Table } from 'antd';

const columns = [
    {
      title: 'Number of UFC Fights',
      dataIndex: 'numberOfFights',
    },
    {
        title: 'Reebok Sponsorship ($)',
        dataIndex: 'AmountPaid',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.AmountPaid - b.AmountPaid,
    },
]

const ReebokPayTable = () => (
    <div className="reebok-table">
        <h6 class="text-center">Reebok pay</h6>
        <Table columns={columns} dataSource={ReebokPayData} />
    </div>
)

export default ReebokPayTable