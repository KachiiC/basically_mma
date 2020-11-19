import React from 'react'
// CSS
import './Test.css'
// Data
import TestData from './TestData'
// Components
import SiteSlideShow from 'Components/SiteSlideShow'



const TestPage = () => {

    return (
      <SiteSlideShow slides={TestData}/>
    )
}


export default TestPage