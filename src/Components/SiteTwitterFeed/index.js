import React from 'react'
// CSS
import './SiteTwitterFeed.css'
// Components
import { Timeline } from 'react-twitter-widgets'

const SiteTwitterFeed = (props) => {
    return (
        <div className="twitter-container">
            <h2>{props.title}</h2>
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
    )
}

export default SiteTwitterFeed