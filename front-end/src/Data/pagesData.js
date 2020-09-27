import React from 'react'
// Pages
import Home from '../Pages/Others/Home'
import About from '../Pages/Others/About/about'
import Store from '../Pages/Others/Store/store'

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
        name: "",
        display: <Home/>
    }
]

export default pagesData;