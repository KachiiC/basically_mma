import React from 'react'
// Data
import {BestFighterTemplateData} from 'Data/MMAWorld/BestOfMMA/BestFighterData'
// Components
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SingleFighter from './SingleFighter'

interface fighterProps {
    first_name: string;
    last_name: string;
    p4p_ranking: number;
    fighter_image: string;
}

const BestFighters = () => {
    
    const divisionsURL = "https://kachiis-rest.herokuapp.com/backend/mma_divisions_list/mma_mens_p4p/"
    const responseData = SiteFetcher(divisionsURL, BestFighterTemplateData)
    const p4p_list = responseData.response.fighters.sort(
        (a:{
            p4p_ranking: number 
        },b: { 
            p4p_ranking: number 
        }) => a.p4p_ranking - b.p4p_ranking
    )

    const p4p_fighters = p4p_list.map((fighter: fighterProps) => {
    
        const fighter_link = `https://www.ufc.com/athlete/${fighter.first_name}-${fighter.last_name}`
      
            return (
                <SingleFighter
                    key={fighter.last_name}
                    link={fighter_link}
                    name={fighter.last_name}
                    ranking={fighter.p4p_ranking}
                    image={fighter.fighter_image}
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