import React from 'react'
// CSS
import './Home.css'
import './Responsive.css'
// Components
// import HomeFeaturedFight from './PageComponents/HomeFeaturedFight'
import HomeFeaturedFight from './PageComponents/HomeFeaturedFight'
import HomeVideoGallery from './PageComponents/HomeVideoGallery'
import HomeTwitterFeed from './PageComponents/HomeTwitterFeed'
import HomeRecommendedCards from './PageComponents/HomeRecommendedCards'
import HomeFeaturedFighter from './PageComponents/HomeFeaturedFighter'

const Home = (  

    <div className="site-grid-system home-page">
        <HomeFeaturedFight />
        <HomeFeaturedFighter />
        {HomeRecommendedCards}
        <HomeVideoGallery />
        {HomeTwitterFeed}
    </div>

)

export default Home;