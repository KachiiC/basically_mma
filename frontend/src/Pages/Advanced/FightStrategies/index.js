import React, {useState} from 'react'
// Data
import FightStrategiesData from 'Data/Advanced/FightStrategies/FightStratData'
// CSS
import './FightStrategies.css'
// Components
import FightStrategiesIntro from './PageComponents/FightStrategiesIntroduction'
import SiteSlideShow from 'Components/SiteSlideShow'
import SiteTabs from '../../../Components/SiteTabs'


const FightStrategies = () => {
  
  return (
      <>
        <h1>Fight Strategies</h1>
        <FightStrategiesIntro />
        <SiteTabs tabs={FightStrategiesData} />
      </>
  );

}

export default FightStrategies