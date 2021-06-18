import React from 'react'
import HomeFeaturedFighterData from 'Data/Other/Home/HomeFeaturedFighterData'

interface dataProps {
    wins: number;
    losses: number;
    draws: number;
    height: string;
    rank: number;
    weight_class: string;
    reach: string;
    wins_via_ko: number;
    wins_via_sub: number;
    wins_via_dec: number;
}

interface Props {
    data: dataProps;
}

const FeaturedFighterTable = (props: Props) => {

    const featureData = props.data

    // Only renders Number of draws if number is above 0
    const renderDraws = featureData.draws > 0 ? featureData.draws + "D" : null

    const mma_record = [
        featureData.wins + "W",
        featureData.losses + "L",
        renderDraws,
    ].filter(record => record !== null)
    .join("-")
    
    return (
        <div className="fighter-details">
            <HomeFeaturedFighterData 
                mma_record={mma_record}
                height={featureData.height}
                rank={featureData.rank}
                weight_class={featureData.weight_class}
                reach={featureData.reach}
                wins_via_ko={featureData.wins_via_ko}
                wins_via_sub={featureData.wins_via_sub}
                wins_via_dec={featureData.wins_via_dec}
            />
        </div>

    )
}

export default FeaturedFighterTable