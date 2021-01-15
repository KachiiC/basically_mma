import React from 'react'
// Data
import fundamentalsData from 'Data/Advanced/Fundamentals/FundamentalsData'
// Components
import SiteFlipCard from 'Components/SiteFlipCard'

const FundamentalCards = () => {

    const displayCards = fundamentalsData.map((card, index) => (

        <SiteFlipCard 
            key={index}
            title={card.title}
            image={`http://via.placeholder.com/300x300.png?text=${card.name}`}
            content={card.content}
        />
    ))
    
    return (
        <div className="fundamentals-cards-container">
            {displayCards}
        </div>
    )

}
export default FundamentalCards