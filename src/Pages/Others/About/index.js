import React from 'react'
import AntdTimeline from 'Components/ExternalComponents/AntdTimeline'
import PromotionsData from "Data/MMAWorld/MMAPromotions/PromotionsData"

const About = (
    <>
    <div className="text-center">
        <p>
            This is a website is designed with react and django rest framework 
        </p>
        <AntdTimeline data={PromotionsData} 
            title="History of Promotions"
        />
    </div>
    </>
)

export default About