import React, {useState} from 'react'
// COMPONENTS
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteVideoModalPlayer from 'Components/SiteVideoModalPlayer'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'
import SiteSingleHighlight from './SiteSingleHighlight'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'

interface highlightProps {
    video_thumbnail: string | undefined
    video_title: string | null | undefined
    playlist_videos: { 
        video_title: string; 
        video_id: string; 
        video_description: string; 
        video_thumbnail: string; 
        upload_date: string 
    }[]
}

const highlights_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/fight_highlights"

const SiteSidebarHighlights = () => {

    // Data
    const responseData = SiteFetcher(highlights_url,fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos

    const [selectedHighlight, setSelectedHighlight] = useState<any>(fight_highlightsData)

    // Handles Modal Click
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => !showModal ? setShowModal(true) : setShowModal(false)

    const renderHighlightsList = fightHighlight.slice(0,4).map((highlight: highlightProps) => {

        const highlightLogic = () => setSelectedHighlight(highlight)

        const handleClick = () => {
            handleModal();
            highlightLogic();
        }
        
        return (
            <SiteSingleHighlight
                video_title={highlight.video_title}
                video_thumbnail={highlight.video_thumbnail}
                click_logic={handleClick}
                highlight_logic={highlightLogic}
            />

        )
    })

    return (
        <>
            <div className="sidebar-section">
                <SiteSectionTitle title ="Fight Highlights" />
                <div className="highlights-list">
                    <SiteRender 
                        data={responseData} 
                        component={renderHighlightsList} 
                    />
                </div>
            </div>
            {showModal && (
                <SiteVideoModalPlayer 
                    youtube_id={selectedHighlight.video_id} 
                    description={selectedHighlight.video_description}
                    upload_date={selectedHighlight.upload_date}
                    video_title={selectedHighlight.video_title}
                    closeModal={handleModal}
                />
            )}
        </>
    )
}

export default SiteSidebarHighlights