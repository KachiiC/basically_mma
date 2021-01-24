import React from 'react'
// Components
import { Timeline } from 'react-twitter-widgets'

const HomeTwitterFeed = () => (

    <div className="home-twitter-feed">
        <div className="twitter-container">
            <h2>What's Happening?</h2>
            <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'basicallymma'
            }}
            options={{
                height: '500'
            }}
        />

        </div>
    </div>

)

export default HomeTwitterFeed