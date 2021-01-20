import React, {useState} from 'react'
// CSS
import './SiteSlider.css'
// Components
import SiteModal from 'Components/SiteModal'
import SiteSliderButton from './SiteSliderButton'
import { useMediaQuery } from 'react-responsive'
import SiteSliderModal from './SiteSliderModal'

const SiteSlider = (props) => {

    const [slideNumber, setSlideNumber] = useState({
        firstSlide: 0,
        secondSlide: 6
    })
    const [showModal, setShowModal] = useState(false)
    const [selectedSlide, setSelectedSlide] = useState(0)

    const selected = props.data[selectedSlide] 

    const modalChange = () => showModal === true ? setShowModal(false) : setShowModal(true)

    const displayPosts = props.data.map((video, index) => {

        const handleSelect = () => setSelectedSlide(props.data.indexOf(video))

        return (
            <div className="site-slider-image-container" key={index}>
                <img src={video.thumbnail} 
                    alt={index} 
                    className="site-slider-image"
                    onClick={() => {handleSelect(); modalChange()}}
                    
                    />
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
            { showModal && (
                <SiteModal closeModal={modalChange}>
                    <SiteSliderModal 
                        caption={selected.caption}
                        type={selected.type}
                        media={selected.media}
                        link={selected.post_link}
                    />
                </SiteModal>
            )}
        </div>
        
    )
}

export default SiteSlider