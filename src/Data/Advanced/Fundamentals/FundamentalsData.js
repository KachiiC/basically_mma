import React from 'react'
// Modal Content
import StrikingData from "./TabsData/StrikingData"
import GrapplingData from "./TabsData/GrapplingData"
import GamePlanningData from './TabsData/GamePlanningData'

// const ExampleData = {
//     "title": "",
//     "example": "",
//     "content": "",
//     "noteable_examples": "" <-- youtube_id
// }
//
// Usage Example: 
// <SiteTabs 
//  tabs={ExampleData}
//  tab_size="3" <-- size of each tab
//  grid_size="12" <-- total of all tabs
//  example="yes" <-- if yes, all must have an example
// />

const fundamentalsData = [
    {
        title: "Striking",
        content: <StrikingData />, 
        image: "",
    },
    {
        title: "Grappling",
        content: <GrapplingData />,      
        image: "",
    },
    {
        title: "Game Planning",
        content: <GamePlanningData />,        
        image: "",
    },
    {
        title: "Weight Cutting",
        content: "",       
        image: "",
    },
    {
        title: "Strength & Conditioning",
        content: "",       
        image: ""
    },
    {
        title: "Nutrition & recovery",
        content: "",       
        image: ""
    },
]

export default fundamentalsData