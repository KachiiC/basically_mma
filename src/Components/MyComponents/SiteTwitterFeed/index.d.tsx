import React from 'react'
// CSS
import './SiteTwitterFeed.css'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
// Components
import { Timeline } from 'react-twitter-widgets'

interface Props {
    title: string | number;
    width: number | string;
    twitter_id: string;
    height: number | string;
}

const SiteTwitterFeed = (props: Props) => (

    <div className="twitter-container w-80">
        {/* Title of feed */}
        <SiteSectionTitle 
            title={props.title} 
            width={props.width} 
        />
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