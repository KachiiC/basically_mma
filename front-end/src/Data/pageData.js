import React from 'react'
// Pages
import Home from '../Pages/Home'
import About from '../Pages/About/about'
import Store from '../Pages/Store/store'

const pageData = [
    {
        name: "about",
        display: <About/>
    },
    {
        name: "store",
        display: <Store />
    },
    {
        name: "",
        display: <Home/>
    }
]

export default pageData;