import React from 'react'
// CSS
import './index.css'
// Components
import fundamentalsData from '../../../Data/Advanced/fundamentals'
import Skeleton from '@material-ui/lab/Skeleton';

function FundamentalCards () {

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