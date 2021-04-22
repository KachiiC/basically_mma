import React from 'react'
// PAGES
import About from 'Pages/Others/About/'
import Store from 'Pages/Others/Store/'
// Other
import News from 'Pages/Others/News'

//// BASICS ////
// Basic Pages
import WhatIsMMA from 'Pages/Basics/WhatIsMMA'
import HistoryOfMMA from 'Pages/Basics/HistoryOfMMA'
import RulesOfMMA from 'Pages/Basics/RulesOfMMA'
import MMADictionary from 'Pages/Basics/MMADictionary'
// Basic Introductions
import BasicIntro from 'Pages/PageIntroductions/BasicIntroductions'
// Basics Example Videos
import BasicVideos from 'Data/Basics/BasicVideos'
// Basics Header Image
import BasicImages from 'SiteImages/Basics/BasicImages'

//// ADVANCED ////
// Advanced Pages
import Fundamentals from 'Pages/Advanced/Fundamentals'
import Techniques from 'Pages/Advanced/Techniques'
import FightStrategies from 'Pages/Advanced/FightStrategies'
import FighterPay from 'Pages/Advanced/FighterPay'
import WeightClasses from 'Pages/Advanced/WeightClasses'
//// Advanced Introductions
import * as AdvancedIntro from 'Pages/PageIntroductions/AdvancedIntroductions'
// Advanced Header Image
import FundamentalsHeader from 'SiteImages/Advanced/Fundamentals/Fundamentals.jpg'
import TechniquesHeader from 'SiteImages/Advanced/Techniques/Techniques.jpg'
import FighterPayHeader from 'SiteImages/Advanced/FighterPay/FighterPay.jpg'
import FightStrategiesHeader from 'SiteImages/Advanced/FightStrategies/FightStrategies.jpg'
import WeightClassesHeader from 'SiteImages/Advanced/WeightClasses/WeightClasses.jpg'

//// MMA WORLD ////
// MMA World Pages
import MMAPromotions from 'Pages/MMAWorld/MMAPromotions'
import MMALegends from 'Pages/MMAWorld/MMALegends'
import BestOfMMA from 'Pages/MMAWorld/BestOfMMA'
import Recommended from 'Pages/MMAWorld/Recommended'
// MMA World introduction //
import * as MMAWorldIntro from 'Pages/PageIntroductions/MMAWorldIntroductions'

const pagesData = [
    {
        title: "basics",
        sub_menu: true,
        menu_list: [
            {
                title: "what-is-mma",
                display: <WhatIsMMA />,
                header_image: BasicImages.WhatIsMMAHeader,
                introduction: BasicIntro.WhatIsMMAIntroduction,
                example_title: BasicVideos.WhatIsMMAVideo.title,
                example_caption: BasicVideos.WhatIsMMAVideo.description,
                example_video_id: BasicVideos.WhatIsMMAVideo.video_id
            },
            {
                title:"history-of-mma",
                display: <HistoryOfMMA />,
                header_image: BasicImages.HistoryOfMMAHeader,
                introduction: BasicIntro.HistoryOfMMAIntroduction,
                example_title: BasicVideos.HistoryOfMMAVideo.title,
                example_caption: BasicVideos.HistoryOfMMAVideo.description,
                example_video_id: BasicVideos.HistoryOfMMAVideo.video_id
            },
            {
                title:"rules-of-mma",
                display: <RulesOfMMA />,
                header_image: BasicImages.RulesOfMMAHeader,
                introduction: BasicIntro.RulesOfMMAIntroduction,
            },
            {
                title:"mma-dictionary",
                display: <MMADictionary />,
                header_image: BasicImages.MMADictionaryHeader,
                introduction: BasicIntro.MMADictionaryIntroduction,
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
                introduction: AdvancedIntro.FundamentalsIntroduction,
                header_image: FundamentalsHeader
            },
            {
                title:"techniques",
                display: <Techniques />,
                introduction: AdvancedIntro.TechniquesIntroduction,
                header_image: TechniquesHeader
            },
            {
                title:"fight-strategies",
                display: <FightStrategies />,
                introduction: AdvancedIntro.FightStrategiesIntroduction,
                header_image: FightStrategiesHeader
            },
            {
                title:"fighter-pay",
                display: <FighterPay />,
                introduction: AdvancedIntro.FighterPayIntroduction,
                header_image: FighterPayHeader
            },
            {
                title:"weight-classes",
                display: <WeightClasses />,
                introduction: AdvancedIntro.WeightClassesIntroduction,
                header_image: WeightClassesHeader
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
                introduction: MMAWorldIntro.BestOfMMAIntroduction
            },
            {
                title:"mma-legends",
                display: <MMALegends />,
                introduction: MMAWorldIntro.MMALegendsIntroduction
            },
            {
                title:"mma-promotions",
                display: <MMAPromotions />,
                introduction: MMAWorldIntro.MMAPromotionsIntroduction
            },
            {
                title:"recommended",
                display: <Recommended />,
                introduction: MMAWorldIntro.RecommendedIntroduction
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