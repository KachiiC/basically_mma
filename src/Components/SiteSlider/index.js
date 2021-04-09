import React, {useState} from 'react'
// CSS
import './SiteSlider.css'
// Components
import SiteSlide from './ComponentParts/SiteSlide'
import SiteSliderButton from './ComponentParts/SiteSliderButton'

const SiteSlider = (props) => {

    // Number of slides displayed on the slider
    const number_of_slides = props.displayed_slides 

    // Crop number of total slides
    const cropped_number = props.data.slice(0, number_of_slides * 5)
    
    // New total number of slides
    const total_slides = cropped_number.length
    
    // Slides that are displayed
    const [slideNumber, setSlideNumber] = useState({
        firstSlide: 0,
        lastSlide: number_of_slides
    })
    
    // Turn each post (object) from data into a slide
    const displayPosts = props.data.map((post, index) => {

        // if component type is instagram, return instagram post link
        const slideLink = props.data.type === "instagram" ? 
            "https://www.instagram.com/p/" + post.post_link
            :
            post.post_link

        return (
            <SiteSlide
                key={index} 
                thumbnail={post.thumbnail}
                link={slideLink}
            />
        )

    })
    // only shows slides from state
    .slice(
        slideNumber.firstSlide, 
        slideNumber.lastSlide
    )

    // Handles previous click
    const prevClick = () => {
        slideNumber.firstSlide === 0 ?
        // if first slide goes into minus index, set slides to last slides
        setSlideNumber(
            {
                firstSlide: total_slides - number_of_slides,
                lastSlide: total_slides
            }
        ): 
        // minus number of displayed slides to first and last slide 
        setSlideNumber(
            {
                firstSlide: slideNumber.firstSlide - number_of_slides,
                lastSlide: slideNumber.lastSlide - number_of_slides
            }
        )
    }

    // Handles next click
    const nextClick = () => {
        // if last displayed slide is equal to total number of slides, reset the carousel 
        slideNumber.lastSlide === total_slides ?
        setSlideNumber(
            {
                firstSlide: 0,
                lastSlide: number_of_slides
            }
        ): 
        // add number of displayed slides to first and last slide 
        setSlideNumber(
            {
                firstSlide: slideNumber.firstSlide + number_of_slides,
                lastSlide: slideNumber.lastSlide + number_of_slides
            }
        )
    }

    // Columns are number of slides and 1 for each button
    const sliderColumns = number_of_slides + 2

    return (
        <>
            {/* Title of slider */}
            <h5>{props.title}</h5>
            {/* Slider */}
            <div className="site-grid h-auto width-100" 
                style={{"gridTemplateColumns": `repeat(${sliderColumns},1fr)`}}
            >
                <SiteSliderButton direction="left" onClick={prevClick} />
                {displayPosts}
                <SiteSliderButton direction="right" onClick={nextClick} />
            </div>
        </>
    )
}

export default SiteSlider