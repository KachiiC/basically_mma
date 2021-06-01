import React from 'react'
// Data
import {BestFighterTemplateData} from 'Data/MMAWorld/BestOfMMA/BestFighterData'
// Components
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SingleFighter from './SingleFighter'

const BestFighters = () => {
    
    const divisionsURL = "https://kachiis-rest.herokuapp.com/backend/mma_divisions_list/mma_mens_p4p/"
    const responseData = SiteFetcher(divisionsURL, BestFighterTemplateData)
    const p4p_list = responseData.response.fighters.sort(
        (a,b) => a.p4p_ranking - b.p4p_ranking
    )

    const p4p_fighters = p4p_list.map((fighter, index) => {
    
        const fighter_link = `https://www.ufc.com/athlete/${fighter.first_name}-${fighter.last_name}`
      
            return (
                <SingleFighter
                    link={fighter_link}
                    ranking={fighter.p4p_ranking}
                    name={fighter.last_name}
                    image={fighter.fighter_image}
                    key={index}
                />
            )
        }
    )

    return (
        <div className="p4p-grid-system w-90 m-auto">
            <SiteRender
                data={responseData}
                component={p4p_fighters}
            />
        </div> 
    )
}

export default BestFighters