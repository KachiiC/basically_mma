import React from 'react'
// Data
import BestOfMMAData from 'Data/MMAWorld/BestOfMMA/BestOfMMA'
// Component
import SiteExternalLink from 'SiteCss/SiteExternalLink'

const BestCategories = () => {

    const displayCategory = BestOfMMAData.map((category, index) => {
        
        const displayFights = category.video_ids.map(
            (fight, index) => (
                <div className="site-span-4" key={index}>
                    <div className="best-of-thumbnail">
                        <SiteExternalLink url={`https://www.youtube.com/watch?v=${fight}`}>
                            <img src={`https://i.ytimg.com/vi/${fight}/maxresdefault.jpg`} 
                                className="site-responsive-image"
                                alt={index}
                            />
                        </SiteExternalLink>
                    </div>
                </div>
            )
        )
        return (
            <div key={index}>
                <h2>Best {category.category}</h2>
                <p>{category.description}</p>
                <div className="site-grid-system">
                    {displayFights}
                </div>
            </div>
        )
    })



    return displayCategory
}

export default BestCategories