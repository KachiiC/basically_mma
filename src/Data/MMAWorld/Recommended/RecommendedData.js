import React from 'react'
import SiteCards from 'Components/SiteCards'
// Data List
import ChannelsData from './RecommendedLists/ChannelsData'
import NewsData from './RecommendedLists/NewsData'
import BreakdownsData from './RecommendedLists/BreakdownsData'
import PodcastsData from './RecommendedLists/PodcastsData'

const RecommendedData = [
    {
        title: "Promotion Channels",
        data: ChannelsData
    },
    {
        title: "News Outlets",
        data: NewsData
    },
    {
        title: "Breakdowns and Analysis",
        data: BreakdownsData
    },
    {
        title: "Podcasts",
        data: PodcastsData
    }
]

RecommendedData.map((category, index) => {
        category.content = (
            <SiteCards 
            data={category.data} 
            key={index}
        />
    )
    return category
})

export default RecommendedData