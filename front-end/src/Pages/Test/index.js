import React from 'react'
// CSS
import './Test.css'
// Components
import SiteCarousel from '../../Components/SiteCarousel'


const TestPage = () => {

  const data =[
    "http://via.placeholder.com/300x300.png?text=Placeholder%201",
    "http://via.placeholder.com/300x300.png?text=Placeholder%202"
  ]
    return (
      <SiteCarousel images={data} />
    )
}


export default TestPage