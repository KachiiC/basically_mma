import React from 'react'
// Components
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const SiteExampleVideo = (props) => (
    <>
        {props.description}
        <SiteYoutubeVideo 
            youtube_id={props.youtube_id} 
            start={props.start} 
        />
    </>
)

export default SiteExampleVideo