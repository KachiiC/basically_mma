import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';

const site_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights"

const VideoModalSuggestions = (props) => {

    const ufc_videos = {
        "playlist_name": "",
        "playlist_id": "",
        "playlist_videos": []
    }

    const responseData = SiteFetcher(site_url, ufc_videos)
    const fightSuggestions = responseData.response.playlist_videos

    const displayFightSuggestion = fightSuggestions.slice(0,4).map((fight, index) => {

        return (
            <div className="gallery-fight-suggestions-section site-grid-system w-100" 
                key={index}
            >
                <div className="image-container site-span-6">
                    <img src={fight.video_thumbnail} 
                        alt={index} 
                        onClick={props.click} 
                        className="site-responsive-image"
                    />           
                </div>
                <div className="gallery-fight-suggestion-title site-span-6">
                    {fight.video_title}
                </div>
            </div>
        )
    })

    return (
        <div className="video-carousel-section site-span-6 site-overflow">
            <div className="gallery-fight-suggestions-header">
                Have you seen these fights?
            </div>
            <SiteRender 
                data={responseData}
                component={displayFightSuggestion} 
            />
        </div>
    )
}

export default VideoModalSuggestions