import React from 'react'
// Tabs
import Attire from './TabsContent/Attire'
import BoutDuration from './TabsContent/BoutDuration'
import Fouls from './TabsContent/Fouls'
import JudgingCriteria from './TabsContent/JudgingCriteria'
import MedicalRequirements from './TabsContent/MedicalRequirements'
import MethodsOfVictory from './TabsContent/MethodsOfVictory'
import ProhibitedSubstances from './TabsContent/ProhibitedSubstances'
import WeightClasses from './TabsContent/WeightClasses'

const tabTitles = [

    {
      tab: "Methods of Victory",
      order: 0,
      paragraph: <MethodsOfVictory/>
    },
    {
        tab: "Attire",
        order: 1,
        paragraph: <Attire />
    },
    {
        tab: "Bout Duration",
        order: 2,
        paragraph: <BoutDuration />
    },
    {
        tab: "Weight Classes",
        order: 3,
        paragraph: <WeightClasses />
    },
    {
        tab: "Judging Criteria",
        order: 4,
        paragraph: <JudgingCriteria />
    },
    {
        tab: "Fouls",
        order: 5,
        paragraph: <Fouls />
    },
    {
        tab: "Medical Requirements",
        order: 6,
        paragraph: <MedicalRequirements />
    },
    {
        tab: "Prohibited Substances",
        order: 7,
        paragraph: <ProhibitedSubstances />
    }
]

export default tabTitles