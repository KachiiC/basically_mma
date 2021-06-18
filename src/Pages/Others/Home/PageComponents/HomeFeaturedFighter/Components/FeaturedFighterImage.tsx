import React from 'react'

interface Props {
    fighter_image: string;
}

const FeatureFighterImage = (props: Props) => (

    <div className="fighter-image w-30">
        <img src={props.fighter_image} 
            alt="featured_fighter"
            className="site-responsive-image"
        />
    </div>
    
)

export default FeatureFighterImage