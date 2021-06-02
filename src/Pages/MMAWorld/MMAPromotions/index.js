import React from 'react'
// CSS
import './MMAPromotions.css'
// Components
import AntdTimeline from 'Components/ExternalComponents/AntdTimeline';
import PromotionsData from "Data/MMAWorld/MMAPromotions/PromotionsData"

const MMAPromotions = <AntdTimeline data={PromotionsData} title="Timeline of MMA Promotions" />

export default MMAPromotions