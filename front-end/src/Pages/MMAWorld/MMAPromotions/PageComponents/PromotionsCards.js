import React, {useState} from 'react'
// Components
import PromotionsList from "Data/MMAWorld/MMAPromotions/PromotionsListData"
import SiteModal from "Components/SiteModal"
import VideoCarousel from "Components/VideoCarousel"


const PromotionsCards = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])

    const displayPromotions = PromotionsList.map((promotion, index) => {

      const rename = () =>  setResult(promotion) 
      const changeVisibility = () => setShowModal(true)

        return (
            <div key={index} className="promotions-card-container">
                <h6>{promotion.promotion_name}</h6>
                <img src="http://via.placeholder.com/250x250.png?text=Placeholder" 
                className="promotions-card-image" alt={promotion.promotion_name}
                onClick={() => {changeVisibility();rename()}} />
            </div>
        )
    })
    
    return (
        <>
        { showModal && (
            <SiteModal closeModal={() => setShowModal(false)}>
                <h2>{result.promotion_name}</h2>
                <VideoCarousel playlist={result.playlist_name}/>
            </SiteModal>
            )
        }
        <h5>MMA Promotions</h5>
        <div className="gallery-row">
            {displayPromotions}
        </div>

        </>
    )
}

export default PromotionsCards