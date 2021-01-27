import React, {useState} from 'react'
// CSS
import './SiteCaptionCarousel.css' 
// Components
import './SiteCaptionCarouselButton'
import SiteCaptionCarouselButton from './SiteCaptionCarouselButton'

// Example Usage:
//
// <SiteCaptionCarousel data={} />
//
// ExampleData:
//
// const ExampleData = [
//     {
//         image: "",
//         caption: "",
//     }
// ]

const SiteCaptionCarousel = (props) => {

    const [imageIndex, setImageIndex] = useState(0)

    const handleBackClick = () => {
        imageIndex === 0 ? setImageIndex(props.data.length - 1) 
        : 
        setImageIndex(imageIndex -1)
    }

    const handleNextClick = () => {
        imageIndex === props.data.length - 1 ? setImageIndex(0) 
        : 
        setImageIndex(imageIndex  + 1)
    }
    
    return (

        <div className="site-caption-carousel-container site-grid-system">
            <SiteCaptionCarouselButton 
                function={handleBackClick} 
                direction="left" 
            />
            <div className="site-caption-carousel-image site-span-10">
                    <img 
                        className="site-responsive-image"
                        src={props.data[imageIndex].image} 
                        alt="gallery-selected"
                    />
                    <div className="caption-content">
                        {props.data[imageIndex].caption}
                    </div>
            </div>
            <SiteCaptionCarouselButton 
                function={handleNextClick} 
                direction="right" 
            />
        </div>

    )
}

export default SiteCaptionCarousel