import React, {useState} from 'react'
// CSS
import './SiteSlider.css'
// Components
import SiteSliderButton from './SiteSliderButton'

const SiteSlider = (props) => {
            
    const [slideNumber, setSlideNumber] = useState({
        firstSlide: 0,
        secondSlide: 6
    })

    const displayPosts = props.data.map(
        (post, index) => (
            <div className="site-slider-image-container h-auto m-auto" 
                key={index}
            >
                <a href={`https://www.instagram.com/p/${post.post_link}`} 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img src={post.thumbnail} 
                        alt={index} 
                        className="site-responsive-image site-slider-image"
                    />
                </a>
            </div>
        )
    ).slice(
        slideNumber.firstSlide, 
        slideNumber.secondSlide
    )

    const prevClick = () => {
        slideNumber.firstSlide === 0 ?
        setSlideNumber(
            {
                firstSlide: 30,
                secondSlide: 36
            }
        ): setSlideNumber(
            {
                firstSlide: slideNumber.firstSlide - 6,
                secondSlide: slideNumber.secondSlide - 6
            }
        )
    }

    const nextClick = () => {
        slideNumber.secondSlide === 36 ?
        setSlideNumber(
            {
                firstSlide: 0,
                secondSlide: 6
            }
        ): setSlideNumber(
            {
                firstSlide: slideNumber.firstSlide + 6,
                secondSlide: slideNumber.secondSlide + 6
            }
        )
    }

    return (
        <div>
            <h5>{props.title}</h5>
            <div className="site-slider-container h-auto width-100">
                <SiteSliderButton 
                    direction="left" 
                    onClick={prevClick}
                />
                {displayPosts}
                <SiteSliderButton 
                    className="site-border"
                    direction="right" 
                    onClick={nextClick}
                />
            </div>
        </div>
    )
}

export default SiteSlider

// Data Format: 
// const DataExample = [
//     {
//         "post_link": "", <-- Link
//         "thumbnail": "" <-- Image
//     }
// ]
// Each data set must be an array have 36 objects
// Each object must have post_link and post_thumbnail properties