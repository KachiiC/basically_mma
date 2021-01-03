import React from 'react'
// Pages
import Home from 'Pages/Others/Home'
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
import Recommended from 'Pages/MMAWorld/BestOfMMA'
// Other
import TestPage from 'Pages/Test'
import Articles from 'Pages/Others/Articles'

const pagesData = [
    {
        title: "about",
        display: <About/>,
        sub_menu: false
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
                display: <WhatIsMMA />
            },
            {
                title:"history-of-mma",
                display: <HistoryOfMMA />
            },
            {
                title:"rules-of-mma",
                display: <RulesOfMMA />
            },
            {
                title:"mma-dictionary",
                display: <MMADictionary />
            }
        ]
    },
    {
        title: "advanced",
        sub_menu: true,
        menu_list: [
            {
                title:"fundamentals",
                display: <Fundamentals />
            },
            {
                title:"techniques",
                display: <Techniques />
            },
            {
                title:"fight-strategies",
                display: <FightStrategies />
            },
            {
                title:"fighter-pay",
                display: <FighterPay />
            },
            {
                title:"weight-classes",
                display: <WeightClasses />
            }
        ]
    },
    {
        title: "mma-world",
        sub_menu: true,
        menu_list: [
            {
                title:"best-of-mma",
                display: <BestOfMMA />
            },
            {
                title:"mma-legends",
                display: <MMALegends />
            },
            {
                title:"mma-promotions",
                display: <MMAPromotions />
            },
            {
                title:"recommended",
                display: <Recommended />
            }
        ]
    },
    // Test Page
    {
        title:"test",
        display: <TestPage />
    },
    {
        title: "",
        display: <Home/>
    },
]

export default pagesData;