import React from 'react'
// COMPONENTS
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';

const VideoModalSuggestions = (props) => {
    return (
        <div className="video-carousel-section site-span-6">
            <div className="fight-suggestions-header w-90">
                Have you seen these fights?
            </div>
            <SiteRender 
                data={props.data}
                component={props.compoennt} 
            />
        </div>
    )
}

export default VideoModalSuggestions