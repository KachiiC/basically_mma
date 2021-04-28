import FilterByNameInput from "Components/ExternalComponents/AntdTable/TableContents/FilterByNameInput"

export const WeightCaptions = [
   "weight class does not exist in the UFC",
   "this is a mens only weight class in the UFC"
]

export const WeightData = [
   {
      name: 'Atomweight',
      weight: 105,
      naturalWeight: "115 - 120",
      gender: 'Female',
   },
   {
      name: 'Strawweight',
      weight: 115,
      naturalWeight: "120 - 135",
      gender: 'Female',
   },
   {
      name: 'Flyweight',
      weight: 125,
      naturalWeight: "135-150",
      gender: 'Both',
   },
   {
      name: 'Bantamweight',
      weight: 135,
      naturalWeight: "150-160",
      gender: 'Both',
   },
   {
      name: 'Featherweight',
      weight: 145,
      naturalWeight: "160-170",
      gender: 'Both',
   },
   {
      name: 'Lightweight',
      weight: 155,
      naturalWeight: "170-185",
      gender: 'Both'
   },
   {
      name: 'Welterweight',
      weight: 170,
      naturalWeight: "185-200",
      gender: 'Male',
   },
   {
      name: 'Middleweight',
      weight: 185,
      naturalWeight: "200-215",
      gender: 'Male',
   },
   {
      name: 'Light Heavyweight',
      weight: 205,
      naturalWeight: "215-235",
      gender: 'Male',
   },
   {
      name: 'Heavyweight',
      weight: 265,
      naturalWeight: "235-250",
      gender: 'Male',
   },
   {
      name: 'Super Heavyweight',
      weight: "No Limit",
      naturalWeight: "N/A",
      gender: 'Male'
   }
]

export const WeightColumns = [
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

export default {
   WeightCaptions,
   WeightData,
   WeightColumns,
   OneChampionshipData,
}