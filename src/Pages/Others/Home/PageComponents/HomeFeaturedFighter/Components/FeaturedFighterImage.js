import React from 'react'

const FeatureFighterImage = (props) => (

    <div className="fighter-image w-30">
        <img src={props.data.fighter_image} 
            alt="featured_fighter"
            className="site-responsive-image"
        />
    </div>
    
)

export default FeatureFighterImage