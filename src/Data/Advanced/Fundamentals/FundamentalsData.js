import React from 'react'
// Modal Content
import StrikingModalData from "./StrikingModalData"
import GrapplingModalData from "./GrapplingModalData"
import GamePlanningModalData from './GamePlanningModalData'

const fundamentalsData = [
    {
        title: "Striking",
        image: "",
        content: <StrikingModalData /> 
    },
    {
        title: "Grappling",
        image: "",
        content: <GrapplingModalData />      
    },
    {
        title: "Game Planning",
        image: "",
        content: <GamePlanningModalData />        
    },
    {
        title: "Weight Cutting",
        image: "",
        content: ""        
    },
    {
        title: "Strength & Conditioning",
        image: "",
        content: ""        
    },
    {
        title: "Nutrition & recovery",
        image: "",
        content: ""        
    },
]

export default fundamentalsData