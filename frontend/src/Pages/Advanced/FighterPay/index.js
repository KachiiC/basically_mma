import React from 'react'
// CSS
import "./FightPay.css"
import MainAndSidebar from 'Components/MainAndSidebar'
// Components
import FighterPayIntroduction from './PageComponents/FighterPayIntroduction'
import PromotionsMoney from './PageComponents/PromotionMoney'
import FighterMoney from './PageComponents/FighterMoney'
import UFCFighterMoney from './PageComponents/UFCFighterMoney'

const FighterPay = () => (
        <MainAndSidebar videos="4">
            <FighterPayIntroduction />
            <PromotionsMoney />
            <FighterMoney />
            <UFCFighterMoney />
        </MainAndSidebar>
)

export default FighterPay