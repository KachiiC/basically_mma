import React from 'react'
// Pages
import Home from '../Pages/Others/Home'
import About from '../Pages/Others/About/'
import Store from '../Pages/Others/Store/'
// Basic
import WhatIsMMA from '../Pages/Basics/WhatIsMMA'
import HistoryOfMMA from '../Pages/Basics/HistoryOfMMA'
import RulesOfMMA from '../Pages/Basics/RulesOfMMA'
import MMADictionary from '../Pages/Basics/MMADictionary'
// Advanced
import Fundamentals from '../Pages/Advanced/Fundamentals'
import Techniques from '../Pages/Advanced/Techniques'
import FightStrategies from '../Pages/Advanced/FightStrategies'
import FighterPay from '../Pages/Advanced/FighterPay'
// MMA World
import MMAPromotions from '../Pages/MMAWorld/MMAPromotions'
import MMALegends from '../Pages/MMAWorld/MMALegends'
import BestOfMMA from '../Pages/MMAWorld/BestOfMMA'
import Recommended from '../Pages/MMAWorld/BestOfMMA'
// Other
import TestPage from '../Pages/Test'
import Articles from '../Pages/Others/Articles'
import WeightClasses from '../Pages/Basics/RulesOfMMA/Components/Tabs/TabsContent/WeightClasses'

const pagesData = [
    {
        name: "/about",
        display: <About/>
    },
    {
        name: "/store",
        display: <Store />
    },
    {
        name: "/articles",
        display: <Articles />
    },
    // Basics
    {
        name: "/what-is-mma",
        display: <WhatIsMMA />
    },
    {
        name:"/history-of-mma",
        display: <HistoryOfMMA />
    },
    {
        name:"/rules-of-mma",
        display: <RulesOfMMA />
    },
    {
        name:"/mma-dictionary",
        display: <MMADictionary />
    },
    // Advanced
    {
        name:"/fundamentals",
        display: <Fundamentals />
    },
    {
        name:"/techniques",
        display: <Techniques />
    },
    {
        name:"/fight-strategies",
        display: <FightStrategies />
    },
    {
        name:"/fighter-pay",
        display: <FighterPay />
    },
    {
        name:"/weight-classes",
        display: <WeightClasses />
    },
    // MMA World
    {
        name:"/best-of-mma",
        display: <BestOfMMA />
    },
    {
        name:"/mma-legends",
        display: <MMALegends />
    },
    {
        name:"/mma-promotions",
        display: <MMAPromotions />
    },
    {
        name:"/recommended",
        display: <Recommended />
    },
    // Test Page
    {
        name:"/test",
        display: <TestPage />
    },
    {
        name: "",
        display: <Home/>
    },
]

export default pagesData;