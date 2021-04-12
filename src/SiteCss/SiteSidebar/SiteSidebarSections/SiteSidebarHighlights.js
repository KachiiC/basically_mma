import React, {useState} from 'react'
// COMPONENTS
import SiteOverlay from 'SiteCss/SiteOverlay'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteVideoModalPlayer from 'Components/SiteVideoModalPlayer'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'

const highlights_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/fight_highlights"

const SiteSidebarHighlights = () => {

    // Data
    const responseData = SiteFetcher(highlights_url,fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos

    // 
    const [selectedHighlight, setSelectedHighlight] = useState(fight_highlightsData)

    // Handles Modal Click
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => showModal === true ? 
        setShowModal(false)
        :
        setShowModal(true)

    const renderHighlightsList = fightHighlight.slice(0,4).map(

        (highlight, index) => {

            const highlightLogic = () => setSelectedHighlight(highlight)

            const handleClick = () => {
                handleModal();
                highlightLogic();
            }
            
            return (
            <>
                <div className="highlights-container site-grid-system cursor-pointer" 
                    key={index}
                >
                    <div className="highlight-image site-span-6 m-auto">
                        <SiteOverlay click={handleClick} icon="play">
                            <img src={highlight.video_thumbnail} 
                                alt="highlight-cover" 
                                className="site-responsive-image" 
                            />
                        </SiteOverlay>
                    </div>
                    <div className="highlight-title site-span-6 m-auto cursor-pointer"
                        onClick={highlightLogic}
                    >
                        {highlight.video_title}
                    </div>
                </div>
            </>
        )
    })


    return (
        <>
            <div className="sidebar-section">
                <div className="sidebar-title">
                    Fight Higlights
                </div>
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