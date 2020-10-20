import React, {useState} from 'react'
// CSS
import './FightStrategies.css'
// Components
import FightStrategiesIntro from './Components/FightStrategiesIntroduction'
import SiteModal from '../../../Components/SiteModal'
import Pictures from '../../../Data/Advanced/FightStratData'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const FightStrategies = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
  
    const displayPictures = Pictures.map((picture, index) => {
  
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
        <div className="site-row">
          { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
              <div className="modal-content">
                <h2>{result.name}</h2>
                <img src={result.url} alt={result.name} />
              </div>
            </SiteModal>
          )}
          <div className="main-container">
            <h1>Fight Strategies</h1>
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