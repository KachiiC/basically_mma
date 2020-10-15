import React from 'react'
// Pages
import Home from '../Pages/Others/Home'
import About from '../Pages/Others/About/about'
import Store from '../Pages/Others/Store/store'
// Basic
import WhatIsMMA from '../Pages/Basics/WhatIsMMA'
import HistoryOfMMA from '../Pages/Basics/HistoryOfMMA'
import RulesOfMMA from '../Pages/Basics/RulesOfMMA'
import MMADictionary from '../Pages/Basics/MMADictionary'
// Advanced
import Fundamentals from '../Pages/Advanced/Fundamentals'
import Techniques from '../Pages/Advanced/Techniques'
import FightStrategies from '../Pages/Advanced/FightStrategies'
// Other
import TestPage from '../Pages/Test'
import Articles from '../Pages/Others/Articles'

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