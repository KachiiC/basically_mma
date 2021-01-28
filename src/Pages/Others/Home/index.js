import React from 'react'
// CSS
import './Home.css'
// Components
import HomeFeatured from './PageComponents/HomeFeaturedFight'
import HomeVideoGallery from './PageComponents/HomeVideoGallery'
import HomeTwitterFeed from './PageComponents/HomeTwitterFeed'
import HomeFeaturedCards from './PageComponents/HomeRecommendedCards'
import HomeFeaturedFighter from './PageComponents/HomeFeaturedFighter'

const Home = () => (  

    <div className="site-grid-system">
        <HomeFeatured />
        <HomeFeaturedFighter />
        <HomeFeaturedCards />
        <HomeVideoGallery />
        <HomeTwitterFeed />
    </div>

)

export default Home;