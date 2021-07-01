import React, {useState} from 'react'
// PROPS
import { highlightProps } from '../SiteSidebarProps'
// COMPONENTS
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
import { modalProps } from 'SiteRedux/SiteModal/ReduxModalProps'
import { modalConnector } from 'SiteRedux/SiteModal/ReduxModalProps'
import SiteSingleHighlight from './SiteSingleHighlight'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'
import { HighlightsURL } from 'Data/SiteUrlsData'
// CSS
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'


const SiteSidebarHighlights = (props:modalProps) => {

    // Data
    const responseData = SiteFetcher(HighlightsURL, fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos

    const [selectedHighlight, setSelectedHighlight] = useState<any>(fight_highlightsData)

    const renderHighlightsList = fightHighlight.slice(0,4).map((highlight: highlightProps) => {

        const { dispatchShowModal } = props;

        const modalContent = (
            <SiteVideoModalPlayer 
                youtube_id={selectedHighlight.video_id} 
                description={selectedHighlight.video_description}
                upload_date={selectedHighlight.upload_date}
                video_title={selectedHighlight.video_title}
                suggestions_url={HighlightsURL}
            />
        )

        const highlightLogic = () => setSelectedHighlight(highlight)
        
        const handleClick = () => {
            setSelectedHighlight(highlight);
            dispatchShowModal({content: modalContent});
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
                <SiteSectionTitle 
                    title="Fight Highlights" 
                    width={100}
                />
                <div className="highlights-list">
                    <SiteRender 
                        data={responseData} 
                        component={renderHighlightsList} 
                    />
                </div>
            </div>
        </>
    )
}

export default modalConnector(SiteSidebarHighlights)