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
import News from 'Pages/Others/News'

// PAGE INTRODUCTIONS
// Basics
import WhatIsMMAIntroduction from 'Pages/PageIntroductions/Basics/WhatIsMMAIntroduction'
import HistoryOfMMAIntroduction from 'Pages/PageIntroductions/Basics/HistoryOfMMAIntroduction'
import MMADictionaryIntroduction from 'Pages/PageIntroductions/Basics/MMADictionaryIntroduction'
import RulesOfMMAIntroduction from 'Pages/PageIntroductions/Basics/RulesOfMMAIntroduction'
// Advanced
import FundamentalsIntroduction from 'Pages/PageIntroductions/Advanced/FundamentalsIntroduction'
import TechniquesIntroduction from 'Pages/PageIntroductions/Advanced/TechniquesIntroduction'
import FightStrategiesIntroduction from 'Pages/PageIntroductions/Advanced/FightStrategiesIntroduction'
import FighterPayIntroduction from 'Pages/PageIntroductions/Advanced/FighterPayIntroduction'
import WeightClassesIntroduction from 'Pages/PageIntroductions/Advanced/WeightClassesIntroduction'
// MMA World
import MMAPromotionsIntroduction from 'Pages/PageIntroductions/MMAWorld/MMAPromotions/PromotionsIntroduction'
// Example Videos
import WhatIsMMAVideo from 'Data/Basics/WhatIsMMA/WhatIsMMAVideo'
import HistoryOfMMAVideo from 'Data/Basics/HistoryOfMMA/HistoryOfMMAVideo'
import RulesOfMMAVideo from 'Data/Basics/RulesOfMMA/RulesOfMMAVideo'
import MMADictionaryVideo from 'Data/Basics/MMADictionary/MMADictionaryVideo'

const pagesData = [
    {
        title: "basics",
        sub_menu: true,
        menu_list: [
            {
                title: "what-is-mma",
                display: <WhatIsMMA />,
                introduction: <WhatIsMMAIntroduction />,
                example_video_description: <WhatIsMMAVideo />,
                example_video_id: "PnUmcL07xnY"
            },
            {
                title:"history-of-mma",
                display: <HistoryOfMMA />,
                introduction: <HistoryOfMMAIntroduction />,
                example_video_description: <HistoryOfMMAVideo />,
                example_video_id: "ea7Uf7BVBvs"
            },
            {
                title:"rules-of-mma",
                display: <RulesOfMMA />,
                introduction: <RulesOfMMAIntroduction />,
                example_video_description: <RulesOfMMAVideo />,
                example_video_id: "0kKALSgyTOc"
            },
            {
                title:"mma-dictionary",
                display: <MMADictionary />,
                introduction: <MMADictionaryIntroduction />,
                example_video_description: <MMADictionaryVideo />,
                example_video_id: "_y1e4UpeVr8",
                example_video_start: "61"
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
                introduction: <MMAPromotionsIntroduction />
            },
            {
                title:"recommended",
                display: <Recommended />,
            }
        ]
    },
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
        title: "news",
        display: <News />,
        sub_menu: false
    }
]

export default pagesData;