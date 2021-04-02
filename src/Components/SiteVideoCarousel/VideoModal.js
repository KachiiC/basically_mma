import React, { useState } from 'react'
// CSS
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteModal from 'Components/SiteModal'
// Data
import HomeImageGalleryData from 'Data/Other/Home/HomeImageGalleryData'
import VideoModalPlayer from './VideoModalPlayer';

const site_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights"

const SiteCarouselModal = (props) => {

    const [currentYoutubeId, setCurrentYoutubeId] = useState({
        video_title: props.video_title,
        youtube_id: props.youtube_id,
        upload_date: props.upload_date,
        description: props.description   
    })

    const responseData = SiteFetcher(site_url, HomeImageGalleryData)
    const fightSuggestions = responseData.response.playlist_videos

    const displayFightSuggestion = fightSuggestions.slice(0,10).map((fight, index) => {

        const handleClick = () => {
            setCurrentYoutubeId(
                {
                    "video_title": fight.video_title,
                    "youtube_id": fight.video_id,
                    "upload_date": fight.upload_date,
                    "description": fight.video_description,
                }
            )
        }

        return (
            <div className="fight-suggestions-section site-grid-system w-100" key={index}>
                <div className="image-container site-span-6">
                    <img src={fight.video_thumbnail} 
                        alt={index} 
                        onClick={handleClick} 
                        className="site-responsive-image"
                    />           
                </div>
                <div className="fight-suggestion-title site-span-6 m-auto">
                    {fight.video_title}
                </div>
            </div>
        )
    })

    return (
        <SiteModal closeModal={props.closeModal} width="90%" overflow="yes">
            <VideoModalPlayer 
                title={currentYoutubeId.video_title}
                youtube_id={currentYoutubeId.youtube_id}
                upload_date={currentYoutubeId.upload_date}
                description={currentYoutubeId.description }
            />
            <div className="video-carousel-section site-span-6">
                <div className="fight-suggestions-header w-90">
                    Have you seen these fights?
                </div>
                <SiteRender 
                    data={responseData}
                    component={displayFightSuggestion} 
                />
            </div>
        </SiteModal>
    )

}

export default SiteCarouselModal
