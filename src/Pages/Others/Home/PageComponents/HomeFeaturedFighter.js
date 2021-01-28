import React from 'react'

const HomeFeaturedFighter = () => {

    return (

        <div className="home-featured-fighter site-span-4">
            <div className="home-featured-fighter-heading">
                Featured Fighter
            </div>
            <h4>Fighter Name</h4>
            <div className="home-featured-fighter-image">
                <img src="http://via.placeholder.com/300x300.png?text=Featured%20Fighter" 
                    alt="featured_fighter"
                    className="site-responsive-image"
                    />
            </div>
            <div>
                Fighter Details
            </div>
        </div>
    )
}

export default HomeFeaturedFighter