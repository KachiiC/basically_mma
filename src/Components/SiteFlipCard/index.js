import React from 'react'
// CSS
import './SiteFlipCard.css'

const SiteFlipCard = (props) => (

    <div className="site-flip-card-container" >
        <div className="site-flip-card" >
            <div className="site-flip-card-inner" >
                <div className="site-flip-card-front">
                    <div className="site-flip-card-font-title">
                        {props.title}
                    </div>
                    <img src={props.image} 
                        alt="Avatar" 
                        className="site-flip-card-image" 
                    />
                </div>
                <div className="site-flip-card-back">
                    <h4 className="site-flip-card-title">{props.title}</h4>
                    <div className="site-flip-content">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    </div>


)

export default SiteFlipCard