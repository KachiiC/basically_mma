import React from 'react'
// CSS
import './SiteTwitterFeed.css'
// Components
import { Timeline } from 'react-twitter-widgets'

const SiteTwitterFeed = (props) => (

    <div className="twitter-container">
        <h2>{props.title}</h2>
        <Timeline
            dataSource={{
                    sourceType: 'profile',
                    screenName: props.twitter_id
                }}
            options={{
                    height: props.height
                }}
        />
    </div>
    
)

export default SiteTwitterFeed