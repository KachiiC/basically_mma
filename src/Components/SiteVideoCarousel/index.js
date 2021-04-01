import React, { useState } from 'react'
// CSS
import './SiteCarousel.css'
import './Responsive.css'
// Components
import SiteCarouselModal from './SiteCarouselModal'


const SiteVideoCarousel = (props) => {

    const imageData = props.data

    const [selectedImage, setSelectedImage] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => showModal === true? setShowModal(false) :setShowModal(true)

    const displayImagesRow = imageData.slice(0,5).map((image, index) => {

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
            <div className="image-carousel">
                <div className="selected-image-container">
                    <img src={imageData[selectedImage].video_thumbnail} 
                        alt="current_slide" 
                        className="selected-image"
                        onClick={handleModal}
                    />
                    {showModal && (
                        <SiteCarouselModal 
                            youtube_id={imageData[selectedImage].video_id} 
                            description={imageData[selectedImage].video_description}
                            upload_date={imageData[selectedImage].upload_date}
                            closeModal={handleModal}
                        />
                    )}
                </div>
                <div className="selectable-images-row">
                    {displayImagesRow}
                </div>
            </div>
        </div>
    )
}

export default SiteVideoCarousel