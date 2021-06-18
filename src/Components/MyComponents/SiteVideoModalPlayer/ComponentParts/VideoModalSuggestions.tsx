import React from 'react'
// COMPONENTS

interface Props {
    video_thumbnail: string;
    video_title: string;
    click: any;
}

const VideoModalSuggestion = (props: Props) => (
    <div className="fight-suggestions-section site-grid-system" 
        id="fight-modal-suggestions"
    >
        <div className="image-container site-span-6">
            <img src={props.video_thumbnail} 
                alt={props.video_thumbnail} 
                onClick={props.click} 
                className="site-responsive-image"
            />           
        </div>
        <div className="fight-suggestion-title site-span-6 m-auto">
            {props.video_title}
        </div>
    </div>
)

export default VideoModalSuggestion