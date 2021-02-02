import React from 'react'
// CSS
// Components
import SiteVideoCarousel from 'Components/SiteVideoCarousel'
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';

const HomeImageGallery = () => {

    const galleryImagesData = {
        playlist_videos : [
            {
                video_title: "",
                video_id: "",
                video_description: "",
                video_thumbnail: "",
                upload_date: ""
            }
        ]
    }

    const HomeVideoGalleryURL = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"

    const responseData = SiteFetcher(
        HomeVideoGalleryURL,
        galleryImagesData
    )

    const fetchedGalleryData = responseData.response.playlist_videos

    const renderHomeGallery = (

        <SiteVideoCarousel 
            data={fetchedGalleryData} 
            title="Latest Fight Highlights"
        />
    )

    return (
        <div className="home-image-gallery">
            <SiteRender 
                data={responseData}
                component={renderHomeGallery}
            />
        </div>
    )
}

export default HomeImageGallery