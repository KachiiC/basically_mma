import React from 'react'
// Tabs
import MethodsOfVictory from './MethodsOfVictory'
import Attire from './Attire'
import BoutDuration from './BoutDuration'
import WeightClasses from './WeightClasses'
import JudgingCriteria from './JudgingCriteria'
import Fouls from './Fouls'
import MedicalRequirements from './MedicalRequirements'
import ProhibitedSubstances from './ProhibitedSubstances'

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