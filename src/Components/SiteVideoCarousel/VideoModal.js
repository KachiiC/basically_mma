import React, { useState } from 'react'
// CSS
// Components
import SiteModal from 'Components/SiteModal'
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'
import ModalSuggestions from './VideoModalSuggestions';


const SiteCarouselModal = (props) => {

    const [currentYoutubeId, setCurrentYoutubeId] = useState({
        "youtube_id": props.youtube_id,
        "upload_date": props.upload_date,
        "description": props.description   
    })

    const handleClick = () => {
        setSelectedVideo(
            {
                "youtube_id": fight.video_id,
                "upload_date": fight.upload_date,
                "description": fight.video_description
            }
        )
    }

    return (
        <SiteModal closeModal={props.closeModal} width="90%">
            <div className="video-carousel-section site-span-6">
                <SiteYoutubeVideo youtube_id={currentYoutubeId.youtube_id} />
                <div className="gallery-modal-description-section">
                    <b>Date Posted: {currentYoutubeId.upload_date}</b>
                    <br/>
                    <div className="gallery-modal-description">
                        {currentYoutubeId.description}
                    </div>
                </div>
            </div>
            <ModalSuggestions />
        </SiteModal>
    )

}

export default SiteCarouselModal
