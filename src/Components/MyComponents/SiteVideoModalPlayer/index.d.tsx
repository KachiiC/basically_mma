import React, { useState } from 'react'
// CSS
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteTools/SiteFetcher';
import SiteModal from 'Components/MyComponents/SiteModal'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
// Data
import HomeImageGalleryData from 'Data/Other/Home/HomeImageGalleryData'
import VideoModalPlayer from './ComponentParts/VideoModalPlayer'
import VideoModalSuggestion from './ComponentParts/VideoModalSuggestions';

interface fightProps {
    video_title: string | undefined;
    video_id: string | undefined;
    video_description: string | undefined;
    video_thumbnail: string | undefined;
    upload_date: string | undefined;
}

interface Props {
    closeModal: any;
    suggestions_url?: any; 
    video_title?: string | undefined;
    youtube_id?: string | undefined;
    upload_date: string | undefined;
    description: string | undefined;
}

const SiteVideoModal = (props: Props) => {

    const [currentYoutubeId, setCurrentYoutubeId] = useState({
        video_title: props.video_title,
        youtube_id: props.youtube_id,
        upload_date: props.upload_date,
        description: props.description   
    })

    const responseData = SiteFetcher(props.suggestions_url, HomeImageGalleryData)
    const fightSuggestions = responseData.response.playlist_videos


    const displayFightSuggestion = fightSuggestions.slice(0,10).map((fight: fightProps) => {

        const handleClick = () => {
            setCurrentYoutubeId(
                {
                    video_title: fight.video_title,
                    youtube_id: fight.video_id,
                    upload_date: fight.upload_date,
                    description: fight.video_description,
                }
            )
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
                description={currentYoutubeId.description }
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
