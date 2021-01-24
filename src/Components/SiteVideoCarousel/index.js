import React, { useState } from 'react'
// CSS
import './SiteCarousel.css'
// Components
import SiteCarouselModal from './SiteCarouselModal'

// Data Format: 
// const ExampleVideoCarouselData = [{
//     "video_title": "",
//     "video_id": "",
//     "video_description": "",
//     "video_thumbnail": ""
// }]
//
// Usage Example: 
// <SiteVideoCarousel
//  data={ExampleVideoCarouselData} 
//  title="Carousel Title"
// />

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
                alt={index} 
                className="selectable-images" 
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
                            youtube_id={
                                imageData[selectedImage].video_id
                            } 
                            description={
                                imageData[selectedImage].video_description
                            }
                            upload_date={
                                imageData[selectedImage].upload_date
                            }
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