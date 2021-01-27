import React from 'react'
// CSS
import "./FightPay.css"
// Components
import PromotionsMoney from './PageComponents/PromotionsMoney'
import FighterMoney from './PageComponents/FighterMoney'
import UFCFighterMoney from './PageComponents/UFCFighterMoney'

const FighterPay = () => (
    <>
        <PromotionsMoney />
        <FighterMoney />
        <UFCFighterMoney />
    </>
)

export default FighterPay