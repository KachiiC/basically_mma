import React, {useState} from 'react'
// CSS
import './SiteCaptionCarousel.css' 
// Components
import SiteCaptionCarouselButton from './SiteCaptionCarouselButton'

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

        <div className="caption-carousel site-grid-system w-90">
            <SiteCaptionCarouselButton 
                function={handleBackClick} 
                direction="left" 
            />
            <div className="site-span-10 w-100">
                <img className="site-responsive-image"
                    src={props.data[imageIndex].image} 
                    alt="gallery-selected"
                />
                <div className="caption-content w-100">
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