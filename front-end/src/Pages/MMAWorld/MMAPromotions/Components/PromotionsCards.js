import React from 'react'
// Components
import PromotionsList from "../../../../Data/Advanced/PromotionsListData"

const PromotionsCards = () => {

    const displayPromotions = PromotionsList.map((promotion, index) => {
        return (
            <div key={index} className="promotions-card-container">
                <h6>{promotion.promotion_name}</h6>
                <img src="http://via.placeholder.com/250x250.png?text=Placeholder" 
                className="promotions-card-image" alt={promotion.promotion_name}/>
            </div>
        )
    })
    
    return (
        <div className="site-row">
            {displayPromotions}
        </div>
    )
}

export default PromotionsCards