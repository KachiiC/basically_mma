import React from 'react'
// CSS
import './Home.css'
// Components
import HomeVideoGallery from './PageComponents/HomeVideoGallery'
import HomeTwitterFeed from './PageComponents/HomeTwitterFeed'
import HomeFeaturedCards from './PageComponents/HomeRecommendedCards'

const Home = () => (  

    <div className="site-grid-system site-span-12">
        <HomeFeaturedCards />
        <HomeVideoGallery />
        <HomeTwitterFeed />
    </div>

)

export default Home;