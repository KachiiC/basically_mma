export const OneChampionshipData = [
   {
      name: 'Atomweight',
      weight: 115,
      gender: 'Female',
   },
   {
      name: 'Strawweight',
      weight: 125,
      gender: 'Both',
   },
   {
      name: 'Flyweight',
      weight: 135,
      gender: 'Both',
   },
   {
      name: 'Bantamweight',
      weight: 145,
      gender: 'Both',
   },
   {
      name: 'Featherweight',
      weight: 155,
      gender: 'Male',
   },
   {
      name: 'Lightweight',
      weight: 170,
      gender: 'Male',
   },
   {
      name: 'Welterweight',
      weight: 185,
      gender: 'Male',
   },
   {
      name: 'Middleweight',
      weight: 205,
      gender: 'Male',
   },
   {
      name: 'Light Heavyweight',
      weight: 225,
      gender: 'Male',
   },
   {
      name: 'Heavyweight',
      weight: 265,
      gender: 'Male',
   },
]

export const OneChampionshipColumns = [
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
   }
]

export default {
   OneChampionshipData,
   OneChampionshipColumns
}