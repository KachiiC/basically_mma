import React from 'react'
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const SiteTabExample = (props) => (
    <div className="tab-example-container">
        <h5>Here is an example for you!</h5>
        <SiteYoutubeVideo youtube_id={props.example} />
    </div>
)

export default SiteTabExample