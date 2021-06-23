import React, {useState} from 'react'
// COMPONENTS
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from 'SiteRedux/SiteReducers/actions';
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'
import SiteSingleHighlight from './SiteSingleHighlight'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
import { HighlightsURL } from 'Data/SiteUrlsData'

const mapDispatchToProps = {
    dispatchShowModal: showModal,
};
  
const connector = connect(undefined, mapDispatchToProps);
  
type AppProps = {} & ConnectedProps<typeof connector>;

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

const SiteSidebarHighlights = (props:AppProps) => {

    // Data
    const responseData = SiteFetcher(HighlightsURL, fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos

    const [selectedHighlight, setSelectedHighlight] = useState<any>(fight_highlightsData)


    const renderHighlightsList = fightHighlight.slice(0,4).map((highlight: highlightProps) => {

        const highlightLogic = () => setSelectedHighlight(highlight)
        
        return (
            <SiteSingleHighlight
                video_title={highlight.video_title}
                video_thumbnail={highlight.video_thumbnail}
                click_logic={handleClick}
                highlight_logic={highlightLogic}
            />

        )
    })

    const { dispatchShowModal } = props;
    
    const handleClick = () => dispatchShowModal({
        content: modalContent
    })

    const modalContent = (
        <SiteVideoModalPlayer 
            youtube_id={selectedHighlight.video_id} 
            description={selectedHighlight.video_description}
            upload_date={selectedHighlight.upload_date}
            video_title={selectedHighlight.video_title}
            suggestions_url={HighlightsURL}
        />
    )

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

export default SiteSidebarHighlights