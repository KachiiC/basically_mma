import React from 'react'
// CSS
import './Home.css'
// Components
import HomeVideoGallery from './PageComponents/HomeVideoGallery'
import HomeTwitterFeed from './PageComponents/HomeTwitterFeed'

const Home = () => (  

    <div className="home-container">
        <HomeVideoGallery />
        <HomeTwitterFeed twitter_handle="basicallymma" />
    </div>

)

export default Home;