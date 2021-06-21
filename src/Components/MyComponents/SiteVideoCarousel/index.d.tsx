import React, { useState } from 'react'
// CSS
import './SiteVideoCarousel.css'
import './Responsive.css'
// COMPONENTS
import SiteOverlay from 'SiteCss/SiteOverlay/index.d'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
import VideoCarousel from './ComponentParts/VideoCarousel'
import CarouselRowImage from './ComponentParts/CarouselRowImage'

interface imageProps {
    video_title: string | undefined;
    video_thumbnail: string | undefined;
}

interface Props {
    data: any;
    row_images: number;
    title?: string;
    suggestions_url: string;
}

const SiteVideoCarousel = (props: Props) => {

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
    const displayImagesRow = imageData.slice(0,rowImages).map((image: imageProps) => {
        
        // On click changes image of carousel to clicked image
        const handleChange = () => setSelectedImage(imageData.indexOf(image))

        return(
            <SiteOverlay>
                <CarouselRowImage
                    key={image.video_title}
                    video_title={image.video_title}
                    video_thumbnail={image.video_thumbnail}
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