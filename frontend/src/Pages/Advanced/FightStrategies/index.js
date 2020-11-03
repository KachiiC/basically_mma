import React, {useState} from 'react'
// Data
import FightStrategiesPictures from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import SiteModal from 'Components/SiteModal'
import FightStrategiesIntro from './PageComponents/FightStrategiesIntroduction'


const FightStrategies = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
  
    const displayPictures = FightStrategiesPictures.map((picture, index) => {
  
      const rename = () =>  setResult(picture) 
      const changeVisibility = () => setShowModal(true)
  
      return (
          <div className="gallery-item" key={index}>
              <h1>{picture.name}</h1>
              <img src={picture.url} alt={picture.name} onClick={() => {changeVisibility();rename()}} />
          </div>
      )
    })
  
    return (
        <MainAndSidebar long ="yes" videos="3" news="3">
          { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
              <div className="site-modal-content">
                <h2>{result.name}</h2>
                <img src={result.url} alt={result.name} />
              </div>
            </SiteModal>
          )}
          <h1>Fight Strategies</h1>
          <FightStrategiesIntro />
          <div className="gallery-row">
            {displayPictures}
          </div>       
        </MainAndSidebar>
    );

}

export default FightStrategies