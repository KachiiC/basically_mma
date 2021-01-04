import React, {useState} from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
// Components
import FightStrategiesIntro from './PageComponents/FightStrategiesIntroduction'
import SiteSlideShow from 'Components/SiteSlideShow'


const FightStrategies = () => {
  
  const [slideIndex, setSlideIndex] = useState(0)

  const prevSlide = () => {
    (slideIndex === 0) ? 
        setSlideIndex(FightStrategiesData.length - 1): 
    setSlideIndex(prevSlide => prevSlide - 1)
  }

  const nextSlide = () => {
      (slideIndex === FightStrategiesData.length - 1) ? 
          setSlideIndex(0): 
      setSlideIndex(prevSlide => prevSlide + 1)
  }
  
  return (
      <>
        <h1>Fight Strategies</h1>
        <FightStrategiesIntro />
        <div className="fight-strat-slides">
            <h2>{FightStrategiesData[slideIndex].title}</h2>
            <SiteSlideShow 
              slides={FightStrategiesData} index={slideIndex} 
              prev={prevSlide} next={nextSlide}
              />
            <div className="fight-strat-description">
                <p>{FightStrategiesData[slideIndex].description}</p>
                <p><b>Notable users:</b> {FightStrategiesData[slideIndex].noteable_examples}</p>
            </div>
        </div>
      </>
  );

}

export default FightStrategies