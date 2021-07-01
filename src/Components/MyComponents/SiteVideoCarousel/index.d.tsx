import React, { useState } from 'react'
// CSS
import './SiteVideoCarousel.css'
import './Responsive.css'
// COMPONENTS
import SiteOverlay from 'SiteCss/SiteOverlay/index.d'
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
import VideoCarousel from './ComponentParts/VideoCarousel'
import CarouselRowImage from './ComponentParts/CarouselRowImage'
// PROPS
import { modalProps, modalConnector } from 'SiteRedux/SiteModal/ReduxModalProps'
import { imageProps, siteVideoCarouselProps } from './SiteVideoCarouselProps'


const SiteVideoCarousel = (props: siteVideoCarouselProps, modal: modalProps) => {

    const [selectedImage, setSelectedImage] = useState(0)

    // current set image
    const current = props.data[selectedImage]

    const titleLogic = () => {
        if (props.title) return <h2>{props.title}</h2>
    }
    
    // Slices the data 
    const displayImagesRow = props.data.slice(0, props.row_images).map((image: imageProps) => {
        
        // On click changes image of carousel to clicked image
        const handleClick = () => setSelectedImage(props.data.indexOf(image))

        return(
            <SiteOverlay>
                <CarouselRowImage
                    key={image.video_title}
                    video_title={image.video_title}
                    video_thumbnail={image.video_thumbnail}
                    click={handleClick}
                />
            </SiteOverlay>
        )
    })
    
    const modalContent = (
        <SiteVideoModalPlayer 
            youtube_id={current.video_id} 
            description={current.video_description}
            upload_date={current.upload_date}
            video_title={current.video_title}
            suggestions_url={props.suggestions_url}
        /> 
    )

    const { dispatchShowModal } = modal;
    
    const handleClick = () => dispatchShowModal({content: modalContent})

    return (
        <>
            {/* The Video Carousel */}
            <div className="image-carousel-container">
                {titleLogic()}
                <VideoCarousel
                    displayed_image={current.video_thumbnail}
                    click={handleClick}
                    images={displayImagesRow}
                    row_images={props.row_images}
                />
            </div>
        </>
    )
}

export default modalConnector(SiteVideoCarousel)