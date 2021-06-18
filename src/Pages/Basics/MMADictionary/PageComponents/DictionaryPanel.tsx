import React from 'react'
// COMPONENTS
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

interface Props {
    example_type: string;
    title: string;
    example: string;
    definition: string;
}

const DictionaryPanel = (props: Props) => {

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