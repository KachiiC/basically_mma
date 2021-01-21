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

    const displayPosts = props.data.map((video, index) => {

        return (
            <div className="site-slider-image-container" key={index}>
                <a href={`https://www.instagram.com/p/${video.post_link}`} 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img src={video.thumbnail} 
                        alt={index} 
                        className="site-slider-image"
                    />
                </a>
            </div>
        )
    }).slice(slideNumber.firstSlide, slideNumber.secondSlide)


    const prevClick = () => {
        slideNumber.secondSlide === 30 ?
        setSlideNumber({
            firstSlide: 0,
            secondSlide: 6
        }): setSlideNumber({
                firstSlide: slideNumber.firstSlide + 6,
                secondSlide: slideNumber.secondSlide + 6
            }
        )
    }

    const nextClick = () => {
        slideNumber.secondSlide === 30 ?
        setSlideNumber({
            firstSlide: 0,
            secondSlide: 6
        }): setSlideNumber({
                firstSlide: slideNumber.firstSlide + 6,
                secondSlide: slideNumber.secondSlide + 6
            }
        )
    }


    return (
        <>
            <div>
                <h5>{props.title}</h5>
                <div className="site-slider-container">
                    <SiteSliderButton 
                        direction="left" 
                        onClick={prevClick}
                    />
                    {displayPosts}
                    <SiteSliderButton 
                        direction="right" 
                        onClick={nextClick}
                    />
                </div>
            </div>
        </>

        
    )
}

export default SiteSlider