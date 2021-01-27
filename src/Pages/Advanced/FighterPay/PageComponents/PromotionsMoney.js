import React  from "react"
// Data
import PromotionsMoneyData from 'Data/Advanced/FighterPay/PromotionsMoneyData'
// Components
import SiteCaptionCarousel from "Components/SiteCaptionCarousel"


const PromotionsMoney = () => {

    return (
        <>
            <h3>How do promotions make money?</h3>
            <p>
                To understand how fighters get paid, we must first understand how
                MMA promotions generate their income. Although every MMA promotions
                operates differently, the main sources of income remain relatively similar.
                These are the main three ways most promotions generate their income.
            </p>
            <SiteCaptionCarousel data={PromotionsMoneyData} />
        </>
    )

}
export default PromotionsMoney