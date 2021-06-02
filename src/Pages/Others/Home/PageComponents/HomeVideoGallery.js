import React from 'react'
// CSS
// Components
import SiteVideoCarousel from 'Components/SiteVideoCarousel'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
// Data
import galleryImagesData from 'Data/Other/Home/HomeImageGalleryData'


const HomeImageGallery = () => {

    const HomeVideoGalleryURL = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/fight_highlights"

    const responseData = SiteFetcher(
        HomeVideoGalleryURL,
        galleryImagesData
    )

    const fetchedGalleryData = responseData.response.playlist_videos

    const renderHomeGallery = (

        <SiteVideoCarousel 
            data={fetchedGalleryData} 
            title="Latest Fight Highlights"
            row_images={5}
            suggestions_url={HomeVideoGalleryURL}
        />
    )

    return (
        <div className="home-video-gallery">
            <SiteRender 
                data={responseData}
                component={renderHomeGallery}
            />
        </div>
    )
}

export default HomeImageGallery