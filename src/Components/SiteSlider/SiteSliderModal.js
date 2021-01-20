import React from 'react'

const SiteSliderModal = (props) => {

    const dislpayedMedia = props.type === "GraphVideo" ? 
        <video 
            src={props.media} 
            controls 
            className="site-slider-media"
        /> :
        <img 
            src={props.media} 
            alt="slide_media"
            className="site-slider-media"
        />
    
    return (
        <div className="site-slider-modal-container">
            <div className="site-slider-modal-post-container">
                <div className="site-slide-media-container">
                    {dislpayedMedia}
                </div>
                <div className="site-slide-media-caption">
                    <p>{props.caption}</p>
                </div>
            </div>
        </div>
    )
}
export default SiteSliderModal