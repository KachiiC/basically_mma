import React from 'react'
// CSS
// Components
import SiteVideoCarousel from 'Components/SiteVideoCarousel'
import SiteFetcher from 'SiteCss/SiteFetcher'
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

    const fetchedGalleryData = responseData.response.playlist_videos

    const renderHomeGallery = (

        <SiteVideoCarousel 
            data={fetchedGalleryData} 
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