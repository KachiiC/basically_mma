import React from 'react'

// Components
import fundamentalsData from '../../../../Data/Advanced/FundamentalsData'
import Skeleton from '@material-ui/lab/Skeleton';

const FundamentalCards = () => {

    const displayCards = fundamentalsData.map((card) => {
        return (
            <div className="fundamentals-card-container">
                <h4>{card.name}</h4>
                <Skeleton variant="rect" width={380} height={215} className="fundamentals-card"/>
            </div>
        )
    })
    
    return (
        <div className="fundamentals-row">
            {displayCards}
        </div>

    )
}
export default FundamentalCards