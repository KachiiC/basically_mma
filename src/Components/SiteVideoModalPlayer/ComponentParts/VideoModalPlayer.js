import React from 'react'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'

const VideoModalPlayer = (props) => {

    const titleLogic = () => {
        if (props.title) {
            return <SiteSectionTitle title={props.title} />
        } 
    }

    const dateLogic = () => {
        if (props.upload_date) {
            return (
                <>
                    <b>Date Posted: {props.upload_date}</b>
                    <br/>
                </>
            )
        } 
    }


    return (
        <div className="video-carousel-section site-span-6">
            {titleLogic()}
            <SiteYoutubeVideo youtube_id={props.youtube_id} />
            <div className="modal-video-description-section">
                {dateLogic()}
                <div className="gallery-modal-description">
                    {props.description}
                </div>
            </div>
        </div>
    )

}

export default VideoModalPlayer