import React from 'react'

// PAGES
import About from 'Pages/Others/About/'
import Store from 'Pages/Others/Store/'
// Basic
import WhatIsMMA from 'Pages/Basics/WhatIsMMA'
import HistoryOfMMA from 'Pages/Basics/HistoryOfMMA'
import RulesOfMMA from 'Pages/Basics/RulesOfMMA'
import MMADictionary from 'Pages/Basics/MMADictionary'
// Advanced
import Fundamentals from 'Pages/Advanced/Fundamentals'
import Techniques from 'Pages/Advanced/Techniques'
import FightStrategies from 'Pages/Advanced/FightStrategies'
import FighterPay from 'Pages/Advanced/FighterPay'
import WeightClasses from 'Pages/Advanced/WeightClasses'
// MMA World
import MMAPromotions from 'Pages/MMAWorld/MMAPromotions'
import MMALegends from 'Pages/MMAWorld/MMALegends'
import BestOfMMA from 'Pages/MMAWorld/BestOfMMA'
import Recommended from 'Pages/MMAWorld/Recommended'
// Other
import Articles from 'Pages/Others/Articles'

// PAGE INTRODUCTIONS
// Basics
import WhatIsMMAIntroduction from 'Data/PageIntroductions/Basics/WhatIsMMAIntroduction'
import HistoryOfMMAIntroduction from 'Data/PageIntroductions/Basics/HistoryOfMMAIntroduction'
import MMADictionaryIntroduction from 'Data/PageIntroductions/Basics/MMADictionaryIntroduction'
import RulesOfMMAIntroduction from 'Data/PageIntroductions/Basics/RulesOfMMAIntroduction'
// Advanced
import FundamentalsIntroduction from 'Data/PageIntroductions/Advanced/FundamentalsIntroduction'
import TechniquesIntroduction from 'Data/PageIntroductions/Advanced/TechniquesIntroduction'
import FightStrategiesIntroduction from 'Data/PageIntroductions/Advanced/FightStrategiesIntroduction'
import FighterPayIntroduction from 'Data/PageIntroductions/Advanced/FighterPayIntroduction'
import WeightClassesIntroduction from 'Data/PageIntroductions/Advanced/WeightClassesIntroduction'
// MMA World
import PromotionsIntroduction from 'Data/PageIntroductions/MMAWorld/MMAPromotions/PromotionsIntroduction'

const pagesData = [
    {
        title: "about",
        display: <About/>,
        sub_menu: false,
    },
    {
        title: "store",
        display: <Store />,
        sub_menu: false
    },
    {
        title: "articles",
        display: <Articles />,
        sub_menu: false
    },
    {
        title: "basics",
        sub_menu: true,
        menu_list: [
            {
                title: "what-is-mma",
                display: <WhatIsMMA />,
                introduction: <WhatIsMMAIntroduction />
            },
            {
                title:"history-of-mma",
                display: <HistoryOfMMA />,
                introduction: <HistoryOfMMAIntroduction />
            },
            {
                title:"rules-of-mma",
                display: <RulesOfMMA />,
                introduction: <RulesOfMMAIntroduction />
            },
            {
                title:"mma-dictionary",
                display: <MMADictionary />,
                introduction: <MMADictionaryIntroduction />
            }
        ]
    },
    {
        title: "advanced",
        sub_menu: true,
        menu_list: [
            {
                title:"fundamentals",
                display: <Fundamentals />,
                introduction: <FundamentalsIntroduction />
            },
            {
                title:"techniques",
                display: <Techniques />,
                introduction: <TechniquesIntroduction />
            },
            {
                title:"fight-strategies",
                display: <FightStrategies />,
                introduction: <FightStrategiesIntroduction />
            },
            {
                title:"fighter-pay",
                display: <FighterPay />,
                introduction: <FighterPayIntroduction />
            },
            {
                title:"weight-classes",
                display: <WeightClasses />,
                introduction: <WeightClassesIntroduction />
            }
        ]
    },
    {
        title: "mma-world",
        sub_menu: true,
        menu_list: [
            {
                title:"best-of-mma",
                display: <BestOfMMA />,
            },
            {
                title:"mma-legends",
                display: <MMALegends />,
            },
            {
                title:"mma-promotions",
                display: <MMAPromotions />,
                introduction: <PromotionsIntroduction />
            },
            {
                title:"recommended",
                display: <Recommended />,
            }
        ]
    },
]

export default pagesData;