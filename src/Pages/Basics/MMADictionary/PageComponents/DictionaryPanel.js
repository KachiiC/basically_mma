import React from 'react'
// COMPONENTS
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const DictionaryPanel = (props) => {

    const displayMedia = props.example_type === "Video" ?
        <SiteYoutubeVideo youtube_id={props.example} />
        :
        <img src={`http://via.placeholder.com/560x315.png?text=${props.title}%20Placeholder`}
            alt="tab-pic"
            className="term-example-media"
        />
    
    return ( 
        <div className="text-center">
            <p><b>Definition</b>: {props.definition}</p>
            {displayMedia}
        </div>
    )
}

export default DictionaryPanel