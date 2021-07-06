import React, {useState} from 'react'
// PROPS
import { highlightProps } from '../SiteSidebarProps'
// COMPONENTS
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
import SiteSingleHighlight from './SiteSingleHighlight'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'
import { HighlightsURL } from 'Data/SiteUrlsData'
// CSS
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'

const SiteSidebarHighlights = () => {

    // Data
    const responseData = SiteFetcher(HighlightsURL, fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos
    
    const [selectedHighlight, setSelectedHighlight] = useState<any>(fight_highlightsData)
    const [showModal, setShowModal] = useState<boolean>(false)

    const modalLogic = () => !showModal ? setShowModal(true) : setShowModal(false)

    const renderHighlightsList = fightHighlight.slice(0,4).map((highlight: highlightProps) => {

        const highlightLogic = () => setSelectedHighlight(highlight)

        const handleClick = () => {
            modalLogic();
            highlightLogic();
        }

        return (

            <div className="highlights-list">
                <SiteSingleHighlight
                    video_title={highlight.video_title}
                    video_thumbnail={highlight.video_thumbnail}
                    highlight_logic={handleClick}
                    click_logic={handleClick}
                />
            </div>
        )
    })

    const modalContent = (
        <SiteVideoModalPlayer 
            youtube_id={selectedHighlight.video_id} 
            video_description={selectedHighlight.video_description}
            upload_date={selectedHighlight.upload_date}
            video_title={selectedHighlight.video_title}
            suggestions_url={HighlightsURL}
            closeModal={modalLogic}
        />
    )
    
    return (
        <>
            {showModal && modalContent}
            <div className="sidebar-section">
                <SiteSectionTitle 
                    title="Fight Highlights" 
                    width={100}
                />
                <SiteRender 
                    data={responseData} 
                    component={renderHighlightsList} 
                />
            </div>
        </>
    )
}

export default SiteSidebarHighlights