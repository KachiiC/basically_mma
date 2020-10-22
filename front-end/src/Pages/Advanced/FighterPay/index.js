import React from 'react'
// CSS
import "./FightPay.css"
// Components
import FighterPayIntroduction from './Components/FighterPayIntroduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'
import PromotionsMoney from './Components/PromotionMoney'
import FighterMoney from './Components/FighterMoney'
import UFCFighterMoney from './Components/UFCFighterMoney'

const FighterPay = () => (
    <div className="site-row">
        <div className="main-container">
            <FighterPayIntroduction />
            <PromotionsMoney />
            <FighterMoney />
            <UFCFighterMoney />
        </div>
        <SiteSidebarLong />
    </div>
)

export default FighterPay