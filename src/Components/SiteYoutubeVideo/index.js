import React from 'react'
// CSS
import './SiteYoutubeVideo.css'

const SiteYoutubeVideo = (props) => {

    return (
        <div className="youtube-video-container">
            <iframe 
                className="youtube-video"
                title="mma_explanation"
                src={`https://www.youtube.com/embed/${props.youtube_id}`}
                frameBorder="0" 
                allowFullScreen 
                allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture
                " 
            />
        </div>
    )
}

export default SiteYoutubeVideo