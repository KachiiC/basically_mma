import React, { useState } from 'react'
// Components
import HomeFeaturedFighterData from 'Data/Other/Home/HomeFeaturedFighterData'
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';

const HomeFeaturedFighter = () => {

    const featuredFighter = {
        "first_name": "",
        "last_name": "",
        "rank": 0,
        "is_champion": false,
        "weight_class": "",
        "age": 0,
        "height": "",
        "reach": "",
        "wins": 0,
        "losses": 0,
        "draws": 0,
        "wins_via_ko": 0,
        "wins_via_sub": 0,
        "wins_via_dec": 0,
        "fighter_image": ""
    }

    // eslint-disable-next-line
    const[fighterIndex, setFighterIndex] = useState(0)

    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_featured_fighter",
        featuredFighter
    )

    const featured_fighter = responseData.response
    const featured_fighter_name = featured_fighter.first_name + " " + featured_fighter.last_name

    const renderDraws = featured_fighter.draws > 0 ? 
        featured_fighter.draws 
        :
        null

    const mma_record = [
        featured_fighter.wins + "W", 
        featured_fighter.losses + "L", 
        renderDraws, 
    ].filter(
        (record) => record !== null
    ).join("-")
    
    const renderFeaturedFighter = (

        <div className="home-featured-fighter">
            <div className="home-featured-fighter-heading">
                Featured Fighter
            </div>
            <h4>{featured_fighter_name}</h4>    
            <div className="home-medium-screen">
                <div className="home-featured-fighter-image">
                    <img src={featured_fighter.fighter_image} 
                        alt="featured_fighter"
                        className="site-responsive-image"
                    />
                </div>
                <div className="home-featured-fighter-details">
                    <h6>Fighter Info:</h6>
                    <table>
                        <tbody>
                            <HomeFeaturedFighterData 
                                mma_record={mma_record}
                                height={featured_fighter.height}
                                rank={featured_fighter.rank}
                                weight_class={featured_fighter.weight_class}
                                reach={featured_fighter.reach}
                                wins_via_ko={featured_fighter.wins_via_ko}
                                wins_via_sub={featured_fighter.wins_via_sub}
                                wins_via_dec={featured_fighter.wins_via_dec}
                                />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

    return (

        <div className="home-feature site-span-4">
            <SiteRender 
                data={responseData}
                component={renderFeaturedFighter}
            />
        </div>

    )

}

export default HomeFeaturedFighter