import React from 'react'
// CSS
import './SiteYoutubeVideo.css'

// USEAGE
// Add youtube_id, height and width

const SiteYoutubeVideo = (props) => {

    const titleLogic = () => {
        if (props.title) {
            return <h3>{props.title}</h3>
        } 
    }
    const captionLogic = () => {
        if (props.caption) {
            return <p>{props.caption}</p>
        } 
    }
    
    return (
    <>
        {titleLogic()}
        {captionLogic()}
        <div className="youtube-video-container w-100">
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
                width={props.width}
            />
        </div>
    </>
)
}

export default SiteYoutubeVideo