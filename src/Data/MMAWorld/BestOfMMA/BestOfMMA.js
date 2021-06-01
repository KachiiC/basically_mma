import React from 'react'
// COMPONENTS
import SiteVideoCarousel from 'Components/SiteVideoCarousel'
// DATA
import BestFighterData from './BestFighterData'

const BestOfFightCategoriesData = [
    {
        title: "Best Fights",
        description: "In a mma fight, anything can happen. The greatest fights are when both fighters put on a great display of their heart and skills, here are some of the best contests to date",
        videos: [
            {
                video_title: "Best UFC Fights of 2020",
                video_id: "RJUcbomUIsk",
                video_description: "Highlights of the 10 best UFC fights of 2020",
                video_thumbnail: "https://i.ytimg.com/vi/RJUcbomUIsk/maxresdefault.jpg",
            },
            {
                video_title: "The 10 best UFC fights of 2018",
                video_id: "ajDagV2tsKE",
                video_description: "2018 provided plenty of memorable bouts inside the Octagon across every division.",
                video_thumbnail: "https://i.ytimg.com/vi/ajDagV2tsKE/maxresdefault.jpg"
            },
            {
                video_title: "20 Great Bellator Fights",
                video_id: "aCR0GYcdGJM",
                video_description: "Almost 6 hours worth of fights from bellator!",
                video_thumbnail: "https://i.ytimg.com/vi/aCR0GYcdGJM/maxresdefault.jpg",
            },
            {
                video_title: "10 Great one round One Championship Fights",
                video_id: "zOKAilF577I",
                video_description: "10 Great fights from one of the best promotions One Championships, all ending in one round",
                video_thumbnail: "https://i.ytimg.com/vi/zOKAilF577I/maxresdefault.jpg",
            },
        ]
    },
    {
        title: "Best Knockouts",
        description: "Some knockouts had world titles are on the line, some were just breath taking, but regardless MMA fans love Knockouts and here are compliations of some of the best of all time",
        videos: [
            {
                video_title: "Greatest UFC knockouts of all time",
                video_id: "LWE79K2Ii-s",
                video_description: "The best and most iconic UFC knockouts of all time",
                video_thumbnail: "https://i.ytimg.com/vi/LWE79K2Ii-s/maxresdefault.jpg",
            },
            {
                video_title: "Best UFC knockouts of 2020",
                video_id: "ZfOtlW-qNdo",
                video_description: "The top 30 UFC knockouts of 2020",
                video_thumbnail: "https://i.ytimg.com/vi/ZfOtlW-qNdo/maxresdefault.jpg",
            }, 
            {
                video_title: "Best UFC knockouts of 2019",
                video_id: "YG4e9UCapDk",
                video_description: "The top 10 UFC knockouts of 2019",
                video_thumbnail: "https://i.ytimg.com/vi/YG4e9UCapDk/maxresdefault.jpg",
            }, 
            {
                video_title: "One Championship knockouts",
                video_id: "B3H0hweMSYA",
                video_description: "50 knockouts in one championship in 20 minutes",
                video_thumbnail: "https://i.ytimg.com/vi/B3H0hweMSYA/maxresdefault.jpg",
            }
        ]
    },
    {
        title: "Best Submissions",
        description: "For those who love grappling, for those who love technique, there is no better feeling than making your oponnent surrender from your submission. Here are some of the best",
        videos: [
            {
                video_title: "Best One Championship submissions",
                video_id: "hA7Ghidars4",
                video_description: "",
                video_thumbnail: "https://i.ytimg.com/vi/hA7Ghidars4/maxresdefault.jpg",
            },
            {
                video_title: "Best submissions of",
                video_id: "tJB41pkbhvY",
                video_description: "",
                video_thumbnail: "https://i.ytimg.com/vi/tJB41pkbhvY/maxresdefault.jpg",
            },
            {
                video_title: "Best UFC submissions of 2020",
                video_id: "LzJlxt-Kyhk",
                video_description: "",
                video_thumbnail: "https://i.ytimg.com/vi/LzJlxt-Kyhk/maxresdefault.jpg",
            },

            {
                video_title: "10 creative ufc submissions",
                video_id: "iOSmEf-50OQ",
                video_description: "",
                video_thumbnail: "https://i.ytimg.com/vi/iOSmEf-50OQ/maxresdefault.jpg",
            }
        ]
    }

]

const BestOfMMACategories = BestOfFightCategoriesData.map((category, index) => {

    category.content = (
        <div key={index}>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <SiteVideoCarousel
                data={category.videos} 
                row_images={4}
            />
        </div>
    )

    return category
})

BestOfMMACategories.push(BestFighterData)

export default BestOfMMACategories