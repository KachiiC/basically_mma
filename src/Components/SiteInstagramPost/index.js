import React from 'react'
//CSS
import './SiteInstagramPost.css'
// Components
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading'

const SiteInstagramPost = (props) => {

    return (
        <div className="instagram-container">
            <blockquote className="instagram-media block-instagram" 
                data-instgrm-version="13"
                data-instgrm-permalink={`https://www.instagram.com/p/${props.media}/?utm_source=ig_embed`}
            >
                <SiteLoading />
            </blockquote>
        </div>
    )
}

export default SiteInstagramPost