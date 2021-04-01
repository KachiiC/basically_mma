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

    const total_slides = props.data.length

    const displayPosts = props.data.map(
        (post, index) => (
            <div className="slider-container h-auto m-auto site-span-2" key={index}>
                <a href={`https://www.instagram.com/p/${post.post_link}`} 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img className="site-responsive-image site-slider-image"
                        src={post.thumbnail} 
                        alt={index} 
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
                firstSlide: total_slides - 6,
                secondSlide: total_slides
            }
        ): setSlideNumber(
            {
                firstSlide: slideNumber.firstSlide - 6,
                secondSlide: slideNumber.secondSlide - 6
            }
        )
    }

    const nextClick = () => {
        slideNumber.secondSlide === total_slides ?
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
        <>
            <h5>{props.title}</h5>
            <div className="site-slider-container h-auto width-100">
                <SiteSliderButton direction="left" onClick={prevClick} />
                {displayPosts}
                <SiteSliderButton direction="right" onClick={nextClick} />
            </div>
        </>
    )
}

export default SiteSlider