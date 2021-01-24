import React, {useEffect, useState} from 'react'
// CSS
import { Empty } from 'antd';
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading';
// Components
import SiteVideoCarousel from 'Components/SiteVideoCarousel'

const HomeImageGallery = () => {

    const [galleryImagesData, setGalleryImagesData] = useState([{
        "video_title": "",
        "video_id": "",
        "video_description": "",
        "video_thumbnail": "",
        "upload_date": ""
    }])
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)
    const playlist_id = "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"

    useEffect(() => {
        fetch(`https://kachiis-rest.herokuapp.com/api/youtube_playlists/${playlist_id}`)
        .then(fetchedData => fetchedData.json())
        .then(imagesData => {
            setIsDisplayable(true)
            setIsFetching(false)
            setGalleryImagesData(imagesData.playlist_videos)
        })
        .catch(error => {
            setIsFetching(false)
            console.log(error)
        })
    },[])

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable) ? (
            <SiteVideoCarousel 
                data={galleryImagesData} 
                title="Latest Fight Highlights"
            />
        ) :(
            <Empty />
        )
    )

    return (
        <div className="home-image-gallery">
            {renderLogic}
        </div>
    )
}

export default HomeImageGallery