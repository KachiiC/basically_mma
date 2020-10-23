import React from 'react'

// Components
import fundamentalsData from '../../../../Data/Advanced/Fundamentals/FundamentalsData'
import Skeleton from '@material-ui/lab/Skeleton';

const FundamentalCards = () => {

    const displayCards = fundamentalsData.map((card, index) => (
            <div className="fundamentals-card-container" key={index}>
                <h4>{card.name}</h4>
                <Skeleton variant="rect" width={380} height={215} className="fundamentals-card"/>
            </div>
        )
    )
    
    return (
        <div className="site-row">
            {displayCards}
        </div>

    )
}
export default FundamentalCards