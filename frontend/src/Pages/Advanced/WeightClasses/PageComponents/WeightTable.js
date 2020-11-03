import React from "react"
// Data
import WeightTableData from 'Data/Advanced/WeightClasses/WeightTableData'
//Components
import {Table} from 'antd';

const columns = [
  {
    title: 'Weight Class',
    dataIndex: 'name',
  },
  {
      title: 'Weight Limit (lbs)',
      dataIndex: 'weight',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.weight - b.weight,
  },
  {
      title:'Expected Fight Night Weight (lbs)',
      dataIndex: 'naturalWeight',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        {
            text: 'Male',
            value: 'Male',
        },
        {
            text: 'Female',
            value: 'Female',
        },
        {
          text: 'Both',
          value: 'Both',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.gender.indexOf(value) === 0,
    sorter: (a, b) => a.gender.length - b.gender.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const WeightTable = () => (
    <>
      <h4>The Unified Rules of MMA Weight Classes</h4>
      <Table columns={columns} dataSource={WeightTableData} />
      <small>* = weight class does not exist in the UFC</small><br/>
      <small>** = this is a mens only weight class in the UFC</small>
    </>
)

export default WeightTable;