import React from 'react'
import './SiteFlipCard.css'

const SiteFlipCard = (props) => {

    const renderStyle = props.size === "large" ? {
        size: {
            height: "425px",
            width: "890px", 
        },
        container: {
            "grid-column": "span 12",
        },
        fontSize: {
            "font-size": "14px"
        }
    } : {
        size: {
            width: "425px", 
        },
        container: {
            "grid-column": "span 6",
        }
    }

    return (
        <div className="site-flip-card-container" style={renderStyle.container}>
            <div className="site-flip-card" style={renderStyle.size}>
                <div className="site-flip-card-inner" style={renderStyle.size}>
                    <div className="site-flip-card-front">
                        <img src={props.image} 
                            alt="Avatar" 
                            style={renderStyle.size}
                            className="site-flip-card-image" 
                        />
                    </div>
                    <div className="site-flip-card-back">
                        <h4 className="site-flip-card-title">{props.title}</h4> 
                        <div className="site-flip-content" style={renderStyle.fontSize}>
                            {props.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SiteFlipCard