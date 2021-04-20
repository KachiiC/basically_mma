import React from 'react'
// Content List
import Attire from './RulesComponents/Attire'
import BoutDuration from './RulesComponents/BoutDuration'
import MedicalRequirements from './RulesComponents/MedicalRequirements'
import MethodsOfVictory from "./RulesComponents/MethodsOfVictory"
import ProhibitedSubstances from './RulesComponents/ProhibitedSubstances'
import FoulRules from './RulesComponents/FoulRules'
import WeightClassRules from './RulesComponents/WeightClass'


export const RulesOfMMAData = [
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

export const RulesOfMMAVideo = () => (
    <>
        <h4>Rules of Mixed Martial Arts</h4>
        <p>This is a short documentary of the origin of mixed martial arts and how it came to
            become the sport that it is today. The age old question of 'which martial arts is
            the best?' and the evolution of mixed martial arts is really fascinating for people
            interested in martial arts!
        </p>
    </>
)

export default RulesOfMMAData