import React from 'react'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const VideoModalPlayer = (props) => {

    const titleLogic = props.title ? <h3>{props.title}</h3> : <></>
    const dateLogic = props.upload_date ? (
        <>
            <b>Date Posted: {props.upload_date}</b>
            <br/>
        </>
    ): <></>

    return (
        <div className="video-carousel-section site-span-6">
                {titleLogic}
                <SiteYoutubeVideo youtube_id={props.youtube_id} />
                <div className="modal-video-description-section">
                    {dateLogic}
                    <div className="gallery-modal-description">
                        {props.description}
                    </div>
                </div>             
        </div>
    )

}

export default VideoModalPlayer