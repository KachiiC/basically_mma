import React from 'react'
// Content List
import Attire from './RulesComponents/Attire'
import BoutDuration from './RulesComponents/BoutDuration'
import MedicalRequirements from './RulesComponents/MedicalRequirements'
import MethodsOfVictory from "./RulesComponents/MethodsOfVictory"
import ProhibitedSubstances from './RulesComponents/ProhibitedSubstances'
import FoulRules from './RulesComponents/FoulRules'
import WeightClassRules from './RulesComponents/WeightClass'


const RulesData = [
    {
        title: "Methods Of Victory",
        content: <MethodsOfVictory />
    },
    {
        title: "Attire",
        content: <Attire />
    },
    {
        title: "Bout Duration",
        content: <BoutDuration />
    },
    {
        title: "Medical Requirements",
        content: <MedicalRequirements />
    },
    {
        title: "Prohibited Substances",
        content: <ProhibitedSubstances />
    },
    {
        title: "Fouls",
        content: <FoulRules />
    },
    {
        title: "Weight Classes",
        content: <WeightClassRules />
    }
]

export default RulesData