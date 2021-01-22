import React from 'react'
// CSS
import './Home.css'
// Components
import HomeVideoGallery from './PageComponents/HomeVideoGallery'
import HomeFeaturedArticle from './PageComponents/HomeFeaturedArticle'

const Home = () => (  

    <div className="home-container">
        <HomeVideoGallery />
        <HomeFeaturedArticle />
    </div>
    
)

export default Home;