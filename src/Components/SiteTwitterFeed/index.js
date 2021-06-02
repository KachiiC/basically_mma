import React from 'react'
// CSS
import './SiteTwitterFeed.css'
// Components
import { Timeline } from 'react-twitter-widgets'

const SiteTwitterFeed = (props) => (

    <div className="twitter-container w-80">
        {/* Title of feed */}
        <h2>{props.title}</h2>
        <Timeline
            dataSource={{
                // "Set Twitter ID"
                screenName: props.twitter_id,
                sourceType: 'profile'
            }}
            options={{
                height: props.height
            }}
        />
    </div>
    
)

export default SiteTwitterFeed