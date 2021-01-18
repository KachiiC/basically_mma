import React, {useEffect, useState} from 'react'
// Components
import SiteCarousel from 'Components/SiteCarousel'

const HomeImageGallery = () => {

    const [galleryImagesData, setGalleryImagesData] = useState([{
        "video_title": "",
        "video_id": "",
        "video_description": "",
        "video_thumbnail": ""
    }])

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/youtube_playlists/PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5/")
        .then(fetchedData => fetchedData.json())
        .then(imagesData => {
            setGalleryImagesData(imagesData.playlist_videos)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div className="home-image-gallery">
            <SiteCarousel images={galleryImagesData}/>
        </div>
    )
}

export default HomeImageGallery