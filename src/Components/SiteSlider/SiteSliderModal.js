import React from 'react'

const SiteSliderModal = (props) => {

    const dislpayedMedia = props.type === "GraphVideo" ? 
        <video 
            src={props.media} 
            controls 
            className="site-slider-media"
        /> 
        :<img 
            src={props.media} 
            alt="slide_media"
            className="site-slider-media"
        />
        
    
    return (
        <>
            <div className="site-slider-modal-media">
                <div className="site-slide-media-container">
                    {dislpayedMedia}
                </div>
            </div>
            <div className="site-slide-media-caption">
                <p>{props.caption}</p>
            </div>
        </>
    )
}
export default SiteSliderModal