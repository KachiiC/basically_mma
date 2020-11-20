import React from "react"
// Data
import OneChampionshipData from 'Data/Advanced/WeightClasses/OneChampionshipData'
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


const OneChampionshipWeightClasses = () => (
    <>
        <h4>One Championship</h4>
        <p>
            One Championship have banned weight-cutting by dehydration in order to promote fighter 
            safety after the death One of their athletes Yang Jian Bing. The promotion’s revised policy 
            on weight after Yang (a 21 year old Chinese Fighter) passed away as a result of 
            dehydration during his weight cut in December 2015.
        </p>
        <p>
            Unlike most MMA organisations,  One Championship monitors their athletes during training 
            camp and have urine specific gravity tests to ensure they are hydrated up to three hours 
            ahead of their bouts. The weight limits are now based on a competitor's "walking weight", 
            rather than their pre-fight weigh-ins weight like most promotions.  Since the new measures 
            took effect, there have been no further serious incidents. The new system was well received 
            by athletes in the organisation, as well as other stakeholders in the MMA industry.  
        </p>
      <h5>One Championship Weight Classes</h5>
      <Table columns={columns} dataSource={OneChampionshipData} />
    </>
  )

export default OneChampionshipWeightClasses;