import React, { useEffect, useState } from 'react'
// Data
import HomeFeaturedFighterData from 'Data/Other/Home/HomeFeaturedFighterData'
// CSS
import { Empty } from 'antd';
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading';

const HomeFeaturedFighter = () => {

    const [featuredFighter, setFeaturedFighter] = useState([{
        first_name : "",
    }])
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)
    // eslint-disable-next-line
    const[fighterIndex, setFighterIndex] = useState(0)

    useEffect(() => {
        fetch(`https://kachiis-rest.herokuapp.com/backend/mma_fighters_list`)
        .then(fetchedData => fetchedData.json())
        .then(fighterData => {
                setIsDisplayable(true)
                setIsFetching(false)
                setFeaturedFighter(fighterData)
            }
        )
        .catch(error => {
            setIsFetching(false)
            console.log(error)
        })
    },[])

    const featured_fighter = featuredFighter[fighterIndex]
    const featured_fighter_name = featured_fighter.first_name + " " + featured_fighter.last_name

    const renderDraws = featured_fighter.draws > 0 ? 
        featured_fighter.draws 
        :
        null

    const renderNC = featured_fighter.no_contests > 0 ? 
        featured_fighter.no_contests + "NC"
        :
        null

    const mma_record = [
        featured_fighter.wins + "W", 
        featured_fighter.losses + "L", 
        renderDraws, 
        renderNC
    ].filter(
        (record) => record !== null
    ).join("-")
    
    const renderLogic = (isFetching) ? (
        <SiteLoading />
    ):(
        (isDisplayable) ?
            <div className="home-featured-fighter">
                <div className="home-featured-fighter-heading ">
                    Featured Fighter
                </div>
                <h4>{featured_fighter_name}</h4>
                <div className="home-featured-fighter-image">
                    <img src="http://via.placeholder.com/300x300.png?text=Featured%20Fighter" 
                        alt="featured_fighter"
                        className="site-responsive-image"
                        />
                </div>
                <> 
                    <div className="home-featured-fighter-details">
                        <table className="site-border">
                            <tbody>
                                <tr>
                                    <th>Fighter Info</th>
                                    <th></th>
                                </tr>
                                <HomeFeaturedFighterData 
                                    promotion={featured_fighter.promotion}
                                    mma_record={mma_record}
                                    height={featured_fighter.height}
                                    weight_class={featured_fighter.weight_class}
                                    reach={featured_fighter.reach}
                                    style={featured_fighter.style}
                                    wins_via_knockout={featured_fighter.wins_via_knockout}
                                    wins_via_submission={featured_fighter.wins_via_submission}
                                />
                            </tbody>
                        </table>
                    </div>
                </>
            </div>
        :(
            <Empty />
        )
    )

    return (

        <div className="home-feature site-span-4">
            {renderLogic}
        </div>

    )

}

export default HomeFeaturedFighter