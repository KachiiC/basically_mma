import React, {useState} from 'react'
// CSS
import './index.css'
// Components
import FightStrategiesIntro from './Introduction'
import FightStrategiesCard from './FightStrategiesCard'
import Pictures from './FightStratData'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const FightStrategies = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
  
    const displayPictures = Pictures.map((picture) => {
  
      const rename = () =>  setResult(picture) 
      const changeVisibility = () => setShowModal(true)
  
      return (
          <div className="gallery-item">
              <h1>{picture.name}</h1>
              <img src={picture.url} alt={picture.name} onClick={() => {changeVisibility();rename()}} />
          </div>
      )
    })
  
    return (
        <div className="site-row">
          { showModal && (
            <FightStrategiesCard closeModal={() => setShowModal(false)}>
              <div className="modal-content">
                <h2>{result.name}</h2>
                <img src={result.url} alt={result.name} />
              </div>
            </FightStrategiesCard>
          )}
          <div className="main-container">
            <FightStrategiesIntro />
            <div className="gallery-row">
              {displayPictures}
            </div>
          </div>
          <SiteSidebarLong />
        </div>
    );

}

export default FightStrategies