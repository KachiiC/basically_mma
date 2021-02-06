import React from 'react'
// CSS
// Components
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'

const SiteSidebarHighlights = () => {

    const fight_highlights = {
        playlist_videos: [
            {
                video_title: "",
                video_id: "",
                video_description: "",
                video_thumbnail: "",
                upload_date: ""
            }
        ]
    }

    const highlights_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/fight_highlights"

    const responseData = SiteFetcher(highlights_url,fight_highlights)

    const fightHighlight = responseData.response.playlist_videos
    console.log(fightHighlight)

    const renderHighlightsList = fightHighlight.slice(0,4).map(

        (highlight, index) => (

            <div className="site-highlights-container" key={index}>
                <div className="site-highlights-image-container">
                    <SiteExternalLink 
                        url={`https://www.youtube.com/watch?v=${highlight.video_id}`}
                    >
                        <img src={highlight.video_thumbnail} alt="highlight-cover"/>
                    </SiteExternalLink>
                </div>
                <div className="site-highlight-title" >
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
        <div className="site-sidebar-section">
            <div className="site-sidebar-title">
                Fight Higlights
            </div>
                <SiteRender 
                    data={responseData} 
                    component={renderHighlightsList} 
                />
        </div>
    )
}

export default SiteSidebarHighlights