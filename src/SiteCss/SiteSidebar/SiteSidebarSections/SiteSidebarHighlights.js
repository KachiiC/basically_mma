import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
// DATA
import fight_highlightsData from 'Data/Other/Sidebar/SidebarHighlightsData'

const highlights_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/fight_highlights"

const SiteSidebarHighlights = () => {

    const responseData = SiteFetcher(highlights_url,fight_highlightsData)
    const fightHighlight = responseData.response.playlist_videos

    const renderHighlightsList = fightHighlight.slice(0,4).map(

        (highlight, index) => (

            <div className="highlights-container site-grid-system" key={index}>
                <div className="highlight-image site-span-6 m-auto">
                    <SiteExternalLink 
                        url={`https://www.youtube.com/watch?v=${highlight.video_id}`}
                    >
                        <img src={highlight.video_thumbnail} 
                            alt="highlight-cover" 
                            className="site-responsive-image" 
                        />
                    </SiteExternalLink>
                </div>
                <div className="highlight-title site-span-6 m-auto" >
                    <SiteExternalLink 
                        url={`https://www.youtube.com/watch?v=${highlight.video_id}`}
                    >
                        {highlight.video_title}
                    </SiteExternalLink>
                </div>
            </div>

        )

    )


    return (
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
    )
}

export default SiteSidebarHighlights