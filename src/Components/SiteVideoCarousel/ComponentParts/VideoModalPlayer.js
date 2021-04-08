import React from 'react'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const VideoModalPlayer = (props) => {

    return (
        <div className="video-carousel-section site-span-6">
                <h3>{props.title}</h3>
                <SiteYoutubeVideo youtube_id={props.youtube_id} />
                <div className="modal-video-description-section">
                    <b>Date Posted: {props.upload_date}</b>
                    <br/>
                    <div className="gallery-modal-description">
                        {props.description}
                    </div>
                </div>             
        </div>
    )

}

export default VideoModalPlayer