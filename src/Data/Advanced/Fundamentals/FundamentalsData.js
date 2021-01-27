import React from 'react'
// Modal Content
import StrikingData from "./TabsData/StrikingData"
import GrapplingData from "./TabsData/GrapplingData"
import GamePlanningData from './TabsData/GamePlanningData'

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