import React from 'react'
// PAGES
import About from 'Pages/Others/About/'
import Store from 'Pages/Others/Store/'
// Other
import News from 'Pages/Others/News'
//// BASICS ////
import BasicPages from 'Pages/Basics/BasicPages'
import BasicIntro from 'Pages/PageIntroductions/BasicIntroductions'
import BasicVideos from 'Data/Basics/BasicVideos'
import BasicImages from 'SiteImages/Basics/BasicImages'
//// ADVANCED ////
import AdvancedPages from 'Pages/Advanced/AdvancedPages'
import AdvancedIntro from 'Pages/PageIntroductions/AdvancedIntroductions'
import AdvancedImages from 'SiteImages/Advanced/AdvancedImages'
//// MMA WORLD ////
import MMAWorldPages from 'Pages/MMAWorld/MMAWorldPages'
import MMAWorldIntro from 'Pages/PageIntroductions/MMAWorldIntroductions'

const pagesData = [
    {
        title: "basics",
        sub_menu: true,
        menu_list: [
            {
                title: "what-is-mma",
                display: BasicPages.WhatIsMMA,
                header_image: BasicImages.WhatIsMMAHeader,
                introduction: BasicIntro.WhatIsMMAIntroduction,
                example_title: BasicVideos.WhatIsMMAVideo.title,
                example_caption: BasicVideos.WhatIsMMAVideo.description,
                example_video_id: BasicVideos.WhatIsMMAVideo.video_id
            },
            {
                title:"history-of-mma",
                display: BasicPages.HistoryOfMMA,
                header_image: BasicImages.HistoryOfMMAHeader,
                introduction: BasicIntro.HistoryOfMMAIntroduction,
                example_title: BasicVideos.HistoryOfMMAVideo.title,
                example_caption: BasicVideos.HistoryOfMMAVideo.description,
                example_video_id: BasicVideos.HistoryOfMMAVideo.video_id
            },
            {
                title:"rules-of-mma",
                display: BasicPages.RulesOfMMA,
                header_image: BasicImages.RulesOfMMAHeader,
                introduction: BasicIntro.RulesOfMMAIntroduction,
            },
            {
                title:"mma-dictionary",
                display: BasicPages.MMADictionary,
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
                display: AdvancedPages.Fundamentals,
                introduction: AdvancedIntro.FundamentalsIntroduction,
                header_image: AdvancedImages.FundamentalsHeader
            },
            {
                title:"techniques",
                display: AdvancedPages.Techniques,
                introduction: AdvancedIntro.TechniquesIntroduction,
                header_image: AdvancedImages.TechniquesHeader
            },
            {
                title:"fight-strategies",
                display: AdvancedPages.FightStrategies,
                introduction: AdvancedIntro.FightStrategiesIntroduction,
                header_image: AdvancedImages.FightStrategiesHeader
            },
            {
                title:"fighter-pay",
                display: AdvancedPages.FighterPay,
                introduction: AdvancedIntro.FighterPayIntroduction,
                header_image: AdvancedImages.FighterPayHeader
            },
            {
                title:"weight-classes",
                display: AdvancedPages.WeightClasses,
                introduction: AdvancedIntro.WeightClassesIntroduction,
                header_image: AdvancedImages.WeightClassesHeader
            }
        ]
    },
    {
        title: "mma-world",
        sub_menu: true,
        menu_list: [
            {
                title:"best-of-mma",
                display: MMAWorldPages.BestOfMMA,
                introduction: MMAWorldIntro.BestOfMMAIntroduction
            },
            {
                title:"mma-legends",
                display: MMAWorldPages.MMALegends,
                introduction: MMAWorldIntro.MMALegendsIntroduction
            },
            {
                title:"mma-promotions",
                display: MMAWorldPages.MMAPromotions,
                introduction: MMAWorldIntro.MMAPromotionsIntroduction
            },
            {
                title:"recommended",
                display: MMAWorldPages.Recommended,
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