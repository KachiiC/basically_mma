import React from 'react'
// CSS
import './SiteTwitterFeed.css'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
// Components
import { Timeline } from 'react-twitter-widgets'

const SiteTwitterFeed = (props) => (

    <div className="twitter-container w-80">
        {/* Title of feed */}
        <SiteSectionTitle title={props.title}/>
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