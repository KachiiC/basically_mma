import React from 'react'
import BestFighters from "Pages/MMAWorld/BestOfMMA/PageComponents/BestFighters"

export const BestFighterTemplateData = {
    fighters: [
        {
            fighter_image: ""
        }
    ]
}


const BestFighterContent = (
    <>
        <h2>Best Fighters</h2>
        <p>
            Ask any 15 mma fans "who is the best fighter?" and you might get 15 different responses 
            depending on who they like or support. To make things a little clearer for you, here is a
            more objective list based on the rankings. Below are the top 15 male fighters based on the
            pound for pound rankings. 
        </p>
        <BestFighters />
    </>
)

const BestFighterData = {
    title: "Best Fighters",
    content: BestFighterContent,
}

export default BestFighterData