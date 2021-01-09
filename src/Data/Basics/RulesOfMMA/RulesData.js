import React from 'react'
import Attire from './RulesComponents/Attire'
import BoutDuration from './RulesComponents/BoutDuration'
import MedicalRequirements from './RulesComponents/MedicalRequirements'
import MethodsOfVictory from "./RulesComponents/MethodsOfVictory"
import ProhibitedSubstances from './RulesComponents/ProhibitedSubstances'


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