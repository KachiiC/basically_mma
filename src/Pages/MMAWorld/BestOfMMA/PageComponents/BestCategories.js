import React from 'react'
// Data
import BestOfMMAData from 'Data/MMAWorld/BestOfMMA/BestOfMMA'
// Component
import SiteVideoCarousel from 'Components/SiteVideoCarousel'

const BestCategories = () => {

    const displayCategory = BestOfMMAData.map((category, index) => {
        
        return (
            <div className="best-categories-container" key={index}>
                <h2>Best {category.category}</h2>
                <p>{category.description}</p>
                <SiteVideoCarousel
                    data={category.videos} 
                    row_images={4}
                />
            </div>
        )
    })



    return displayCategory
}

export default BestCategories