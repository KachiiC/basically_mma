import React, {useState} from 'react'
// CSS
import './SiteCaptionCarousel.css' 
// Components
import SiteCaptionCarouselButton from './ComponentParts/SiteCaptionCarouselButton'
import SiteCaptionCarouselImage from './ComponentParts/SiteCaptionCarouselImage'

const SiteCaptionCarousel = (props) => {

    // default image 
    const [imageIndex, setImageIndex] = useState(0)

    // Slides Data
    const current_slide = props.data[imageIndex]
    const total_slides = props.data.length

    // Previous Slide
    const prevClick = () => {
        imageIndex === 0 ? setImageIndex(total_slides - 1) 
        : 
        setImageIndex(imageIndex - 1)
    }

    // Next Slide
    const nextClick = () => {
        imageIndex === total_slides - 1 ? setImageIndex(0) 
        : 
        setImageIndex(imageIndex + 1)
    }
    
    return (

        <div className="caption-carousel site-grid-system w-90 text-center">
            {/* Left Button */}
            <SiteCaptionCarouselButton 
                function={prevClick} 
                direction="left" 
            />
            {/* Carousel */}
            <SiteCaptionCarouselImage
                image={current_slide.image}
                caption={current_slide.caption}
            />
            {/* Right Button */}
            <SiteCaptionCarouselButton 
                function={nextClick} 
                direction="right" 
            />
        </div>

    )
}

export default SiteCaptionCarousel