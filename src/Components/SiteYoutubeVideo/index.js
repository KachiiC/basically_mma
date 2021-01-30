import React from 'react'
// CSS
import './SiteYoutubeVideo.css'

// USEAGE
// Add youtube_id, height and width

const SiteYoutubeVideo = (props) => {

    return (
        <div className="youtube-video-container">
            <iframe 
                className="youtube-video"
                title="mma_explanation"
                src={
                    `https://www.youtube.com/embed/${props.youtube_id}?start=${props.start}`
                }
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
                height={props.height}
                weight={props.weight}
            />
        </div>
    )
}

export default SiteYoutubeVideo