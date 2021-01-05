import React from 'react'
import Attire from './PageComponents/Attire'
import BoutDuration from './PageComponents/BoutDuration'
import MedicalRequirements from './PageComponents/MedicalRequirements'
import MethodsOfVictory from "./PageComponents/MethodsOfVictory"
import ProhibitedSubstances from './PageComponents/ProhibitedSubstances'


const RulesData = [
    {
        title: "Methods Of Victory",
        size: "large",
        content: <MethodsOfVictory />
    },
    {
        title: "Attire",
        size: "small",
        content: <Attire />
    },
    {
        title: "Bout Duration",
        size: "small",
        content: <BoutDuration />
    },
    {
        title: "Medical Requirements",
        size: "small",
        content: <MedicalRequirements />
    },
    {
        title: "Prohibited Substances",
        size: "small",
        content: <ProhibitedSubstances />
    },
]

export default RulesData