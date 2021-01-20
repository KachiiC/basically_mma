import React from 'react'
// CSS
import './Home.css'
import HomeImageGallery from './PageComponents/HomeImageGallery'
import HomeInstaSlider from './PageComponents/HomeInstaSlider'
// Components

const Home = () => {


    return (
        <>
        <div className="home-container">
            <HomeImageGallery />
        </div>
        {/* <HomeInstaSlider /> */}
        </>
    )
}

export default Home;