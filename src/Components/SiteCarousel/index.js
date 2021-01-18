import React, { useState } from 'react'
// CSS
import './SiteCarousel.css'

const SiteCarousel = (props) => {


    const imageData = props.images

    const [selectedImage, setSelectedImage] = useState(0)

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
            <div className="image-carousel">
                <div className="selected-image-container">
                    <a href={`https://www.youtube.com/watch?v=${imageData[selectedImage].video_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={imageData[selectedImage].video_thumbnail} 
                            alt="current_slide" 
                            className="selected-image"
                        />
                    </a>
                </div>
                <div className="selectable-images-row">
                    {displayImagesRow}
                </div>
            </div>
        </div>
    )
}

export default SiteCarousel