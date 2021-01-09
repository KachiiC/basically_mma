import React from 'react'
// Modal Content
import StrikingModalData from "./StrikingModalData"
import GrapplingModalData from "./GrapplingModalData"
import GamePlanningModalData from './GamePlanningModalData'

const fundamentalsData = [
    {
        name: "Striking",
        image: "",
        modal_content: <StrikingModalData /> 
    },
    {
        name: "Grappling",
        image: "",
        modal_content: <GrapplingModalData />      
    },
    {
        name: "Game Planning",
        image: "",
        modal_content: <GamePlanningModalData />        
    },
    {
        name: "Weight Cutting",
        image: "",
        modal_content: ""        
    },
    {
        name: "Strength & Conditioning",
        image: "",
        modal_content: ""        
    },
    {
        name: "Nutrition & recovery",
        image: "",
        modal_content: ""        
    },
]

export default fundamentalsData