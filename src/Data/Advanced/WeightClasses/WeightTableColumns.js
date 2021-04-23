const WeightColumns = [
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
]

export default WeightColumns