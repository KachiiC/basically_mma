import React from 'react'
// CSS
// Components
import SiteVideoCarousel from 'Components/MyComponents/SiteVideoCarousel/index.d'
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
// Data
import galleryImagesData from 'Data/Other/Home/HomeImageGalleryData'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
import { HomeVideoGalleryURL } from 'Data/SiteUrlsData'

const HomeImageGallery = () => {

    const responseData = SiteFetcher(
        HomeVideoGalleryURL,
        galleryImagesData
    )

    const renderHomeGallery = (

        <SiteVideoCarousel 
            data={responseData.response.playlist_videos} 
            row_images={5}
            suggestions_url={HomeVideoGalleryURL}
        />
    )

    return (

        <div className="site-span-8">
            <SiteSectionTitle title="Latest Fight Highlights" />
            <SiteRender 
                data={responseData}
                component={renderHomeGallery}
            />
        </div>

    )
}

export default HomeImageGallery