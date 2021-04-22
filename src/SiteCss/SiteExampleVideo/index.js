import React from 'react'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const SiteExampleVideo = (props) => (
    
        <SiteYoutubeVideo 
            youtube_id={props.youtube_id} 
            start={props.start}
            title={props.title}
            caption={props.caption}
        />
)

export default SiteExampleVideo