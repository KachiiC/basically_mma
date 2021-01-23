import React from 'react'

const HomeTwitterFeed = (props) => (

    <div className="home-twitter-feed">
        <div className="twitter-container">
            <a className="twitter-timeline" 
                href={`https://twitter.com/${props.twitter_handle}?ref_src=twsrc%5Etfw`}
                data-height="500"
                data-theme="dark"
            >
                Tweets by BasicallyMma
            </a> 
        </div>
    </div>

)

export default HomeTwitterFeed