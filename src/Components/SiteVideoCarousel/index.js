import React, { useState } from 'react'
// CSS
import './SiteVideoCarousel.css'
import './Responsive.css'
// Components
import VideoCarouselModal from './VideoModal'


const SiteVideoCarousel = (props) => {

    const imageData = props.data

    const [selectedImage, setSelectedImage] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => showModal === true? setShowModal(false) :setShowModal(true)

    const displayImagesRow = imageData.slice(0,6).map((image, index) => {

        const handleChange = () => setSelectedImage(imageData.indexOf(image))

        return(
            <img
                src={image.video_thumbnail} 
                key={index}
                alt={image.video_title} 
                className="selectable-images site-responsive-image site-span-2" 
                onClick={handleChange}
            />
        )
    })

    return (
        <div className="image-carousel-container">
            <h2>{props.title}</h2>
            <div className="m-auto w-90">
                <img src={imageData[selectedImage].video_thumbnail} 
                    alt="current_slide" 
                    className="site-responsive-image selected-image"
                    onClick={handleModal}
                />
                <div className="site-grid-system">
                    {displayImagesRow}
                </div>
            </div>
            {showModal && (
                <VideoCarouselModal 
                    youtube_id={imageData[selectedImage].video_id} 
                    description={imageData[selectedImage].video_description}
                    upload_date={imageData[selectedImage].upload_date}
                    closeModal={handleModal}
                />
            )}
        </div>
    )
}

export default SiteVideoCarousel