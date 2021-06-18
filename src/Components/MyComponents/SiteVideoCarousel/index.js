import React, { useState } from 'react'
// CSS
import './SiteVideoCarousel.css'
import './Responsive.css'
// COMPONENTS
import SiteOverlay from 'SiteCss/SiteOverlay'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer'
import VideoCarousel from './ComponentParts/VideoCarousel'
import CarouselRowImage from './ComponentParts/CarouselRowImage'


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
            <SiteOverlay>
                <CarouselRowImage
                    key={index}
                    video_thumbnail={image.video_thumbnail}
                    video_title={image.video_title}
                    click={handleChange}
                />
            </SiteOverlay>
        )
    })

    const titleLogic = () => {
        if (props.title) {
            return <h2>{props.title}</h2>
        } 
    }

    return (
        <>
            {/* The Video Carousel */}
            <div className="image-carousel-container">
                {titleLogic()}
                <VideoCarousel
                    displayed_image={current.video_thumbnail}
                    click={handleModal}
                    images={displayImagesRow}
                    row_images={rowImages}
                />
            </div>
            {/* The Video Modal shown on click */}
            {showModal && (
                <SiteVideoModalPlayer 
                    youtube_id={current.video_id} 
                    description={current.video_description}
                    upload_date={current.upload_date}
                    video_title={current.video_title}
                    closeModal={handleModal}
                    suggestions_url={props.suggestions_url}
                />
            )}
        </>
    )
}

export default SiteVideoCarousel