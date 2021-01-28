import React from 'react'
// Components
import SiteInlineImage from 'SiteCss/SiteInlineImage'

const HomeFeaturedFight = () => {

    return (
        <div className="site-span-8 home-featured-fight">
            <img className="site-responsive-image"
                src="http://via.placeholder.com/1920x1080.png?text=Featured%20Fight" 
                alt="home_feature"
            />
            <div className="caption-content">
                Featured Fight
            </div>
        </div>
    )
}

export default HomeFeaturedFight