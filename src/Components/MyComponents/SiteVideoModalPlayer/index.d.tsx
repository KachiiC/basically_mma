import React, { useState } from 'react'
// PROPS
import { SiteVideoModalProps, fightProps } from './SiteVideoModalProps';
// DATA
import HomeImageGalleryData from 'Data/Other/Home/HomeImageGalleryData'
// CSS
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteTools/SiteFetcher';
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
import VideoModalPlayer from './ComponentParts/VideoModalPlayer'
import VideoModalSuggestion from './ComponentParts/VideoModalSuggestions';
import SiteModal from '../SiteModal'

const SiteVideoModal = (props: SiteVideoModalProps) => {

    const [currentYoutubeId, setCurrentYoutubeId] = useState({
        video_title: props.video_title,
        youtube_id: props.youtube_id,
        upload_date: props.upload_date,
        video_description: props.video_description   
    })

    const responseData = SiteFetcher(props.suggestions_url, HomeImageGalleryData)
    const fightSuggestions = responseData.response.playlist_videos.slice(0,10)

    const displayFightSuggestion = fightSuggestions.map((fight: fightProps) => {

        const handleClick = () => {
            setCurrentYoutubeId({
                video_title: fight.video_title,
                youtube_id: fight.video_id,
                upload_date: fight.upload_date,
                video_description: fight.video_description,
            })
        }

        return (
            <VideoModalSuggestion
                key={fight.video_title}
                video_title={fight.video_title}
                video_thumbnail={fight.video_thumbnail}
                click={handleClick}
            />
        )
    })

    return (
        <SiteModal closeModal={props.closeModal} width="90%" overflow="yes">
            <VideoModalPlayer 
                title={currentYoutubeId.video_title}
                youtube_id={currentYoutubeId.youtube_id}
                upload_date={currentYoutubeId.upload_date}
                description={currentYoutubeId.video_description }
            />
            <div className="video-carousel-section site-span-6">
                <SiteSectionTitle title="Have you seen these fights?" />
                <SiteRender 
                    data={responseData}
                    component={displayFightSuggestion} 
                />
            </div>
        </SiteModal>
    )

}

export default SiteVideoModal
