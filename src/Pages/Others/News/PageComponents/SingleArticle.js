import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteOverlay from 'SiteCss/SiteOverlay'

const SingleArticle = (props) => (
    
    <div key={props.index} className="single-article site-span-4 w-90">
        <SiteOverlay icon={props.icon}>
            <SiteExternalLink url={props.post_link}>
                <img src={props.thumbnail_url} 
                    alt={props.title} 
                    class="site-responsive-image"
                />
            </SiteExternalLink>
        </SiteOverlay>
        <div className="article-text">
            <SiteExternalLink url={props.post_link}>
                <h5>{props.article_title}</h5>
            </SiteExternalLink>
            <p>{props.text_preview}</p>
            <p className="time-stamp">{props.post_time_stamp}</p>
        </div>
    </div>
)


export default SingleArticle