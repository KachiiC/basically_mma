import React, { useState } from 'react'
// CSS
import './SiteVideoCarousel.css'
import './Responsive.css'
// Components
import VideoModal from './ComponentParts/VideoModal'
import VideoCarousel from './ComponentParts/VideoCarousel'


const SiteVideoCarousel = (props) => {

    const imageData = props.data
    const [selectedImage, setSelectedImage] = useState(0)

    // current set image
    const current = imageData[selectedImage]
    
    // Modal set false by default 
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => showModal === true? setShowModal(false) :setShowModal(true)

    // Number of images displayed in thumbnail rows
    const rowImages = props.row_images

    // Slices the data 
    const displayImagesRow = imageData.slice(0,rowImages).map((image, index) => {
        
        // On click changes image of carousel to clicked image
        const handleChange = () => setSelectedImage(imageData.indexOf(image))

        return(
            <img
                src={image.video_thumbnail} 
                key={index}
                alt={image.video_title} 
                className="selectable-images site-responsive-image site-span-1" 
                onClick={handleChange}
            />
        )
    })

    return (
        <>
            {/* The Video Carousel */}
            <div className="image-carousel-container">
                <h2>{props.title}</h2>
                <VideoCarousel
                    displayed_image={current.video_thumbnail}
                    click={handleModal}
                    images={displayImagesRow}
                    row_images={rowImages}
                />
            </div>
            {/* The Video Modal shown on click */}
            {showModal && (
                <VideoModal 
                    youtube_id={current.video_id} 
                    description={current.video_description}
                    upload_date={current.upload_date}
                    video_title={current.video_title}
                    closeModal={handleModal}
                />
            )}
        </>
    )
}

export default SiteVideoCarousel