import React from 'react'
import HomeFeaturedFighterData from 'Data/Other/Home/HomeFeaturedFighterData'

const FeaturedFighterTable = (props) => {

    const renderDraws = props.data.draws > 0 ? 
        props.data.draws + "D"
        : 
        null

    const mma_record = [
        props.data.wins + "W", 
        props.data.losses + "L", 
        renderDraws, 
    ].filter(record => record !== null)
    .join("-")
    
    return (
        <div className="fighter-details">
            <table>
                <tbody>
                    <HomeFeaturedFighterData 
                        mma_record={mma_record}
                        height={props.data.height}
                        rank={props.data.rank}
                        weight_class={props.data.weight_class}
                        reach={props.data.reach}
                        wins_via_ko={props.data.wins_via_ko}
                        wins_via_sub={props.data.wins_via_sub}
                        wins_via_dec={props.data.wins_via_dec}
                    />
                </tbody>
            </table>
        </div>

    )
}

export default FeaturedFighterTable