import React from 'react'
// Pages
import Home from '../Pages/Others/Home'
import About from '../Pages/Others/About/about'
import Store from '../Pages/Others/Store/store'
    // Basic
    import WhatIsMMA from '../Pages/Basics/WhatIsMMA'
import HistoryOfMMA from '../Pages/Basics/HistoryOfMMA'

const pagesData = [
    {
        name: "/about",
        display: <About/>
    },
    {
        name: "/store",
        display: <Store />
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
        name: "",
        display: <Home/>
    },
]

export default pagesData;