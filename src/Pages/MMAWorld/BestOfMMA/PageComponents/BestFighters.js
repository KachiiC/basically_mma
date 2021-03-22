import React from 'react'
// Components
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteExternalLink from 'SiteCss/SiteExternalLink';

const BestFighters = () => {

    const division = {
        fighters: [
            {
                fighter_image: ""
            }
        ]
    }
    
    const divisionsURL = "https://kachiis-rest.herokuapp.com/backend/mma_divisions_list/mma_mens_p4p/"
    const responseData = SiteFetcher(divisionsURL, division)
    const p4p_list = responseData.response.fighters.sort(
        (a,b) => a.p4p_ranking - b.p4p_ranking
    )

    const p4p_fighters = p4p_list.map((fighter, index) => {
        
        const fighter_link = `https://www.ufc.com/athlete/${fighter.first_name}-${fighter.last_name}`

            return (
                <div className="site-span-3 w-80 m-auto" key={index}>
                    <SiteExternalLink url={fighter_link}>
                        <h6>#{fighter.p4p_ranking} - {fighter.last_name}</h6>
                        <img src={fighter.fighter_image} alt={index} className="site-responsive-image"/>
                    </SiteExternalLink>
                </div>
            )
        }
    )

    return (
        
        <div>
            <h1>Best Fighters</h1>
            <p>Ask any 15 mma fans "who is the best fighter?" and you might get 15 different responses 
                depending on who they like or support. To make things a little clearer for you, here is a
                more objective list based on the rankings. Below are the top 15 male fighters based on the
                pound for pound rankings. 
            </p>
            <div className="p4p-grid-system">
                <SiteRender
                    data={responseData}
                    component={p4p_fighters} 
                />
            </div>
        </div>
            
    )
}

export default BestFighters