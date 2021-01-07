import React from 'react'
// Components
import SiteFlipCard from 'Components/SiteFlipCard'
// Data 
import RulesData from 'Data/Basics/RulesOfMMA/RulesData'

const RulesCards = () => {

    const displayCardsList = RulesData.map((rule, index) =>  (
            <SiteFlipCard 
                key={index}
                size={rule.size}
                title={rule.title}
                content={rule.content}
                image={`http://via.placeholder.com/425x425.png?text=${rule.title}`}
            />
        )
    )


    return (
        <div className="rules-cards-container">
            {displayCardsList}
        </div>
    )
}

export default RulesCards