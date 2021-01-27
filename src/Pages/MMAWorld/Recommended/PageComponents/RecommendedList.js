import React from 'react'
// Data
import RecommendedData from 'Data/MMAWorld/Recommended/RecommendedData'
// Components 
import SiteCards from 'Components/SiteCards'

const RecommendedList = () => {

    console.log(RecommendedData[0].featured_link)

    const listOfRecommended = RecommendedData.map((item, index) => 
            <SiteCards 
                data={item.data} 
                title={item.title} 
                key={index}
            />
        )

    return listOfRecommended
} 


export default RecommendedList