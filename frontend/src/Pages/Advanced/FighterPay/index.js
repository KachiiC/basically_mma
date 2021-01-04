import React from 'react'
// CSS
import "./FightPay.css"
// Components
import FighterPayIntroduction from './PageComponents/FighterPayIntroduction'
import PromotionsMoney from './PageComponents/PromotionMoney'
import FighterMoney from './PageComponents/FighterMoney'
import UFCFighterMoney from './PageComponents/UFCFighterMoney'

const FighterPay = () => (
        <>
            <FighterPayIntroduction />
            <PromotionsMoney />
            <FighterMoney />
            <UFCFighterMoney />
        </>
)

export default FighterPay