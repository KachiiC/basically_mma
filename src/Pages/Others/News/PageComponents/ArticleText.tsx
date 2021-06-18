import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteTools/SiteExternalLink'

interface Props {
    post_link: string;
    article_title: string;
    text_preview: string;
    post_time_stamp: string; 
}

const ArticleText = (props: Props) => (
    <div className="article-text">
        <SiteExternalLink url={props.post_link}>
            <h5>{props.article_title}</h5>
        </SiteExternalLink>
        <p>
            {props.text_preview}
        </p>
        <p className="time-stamp">
            {props.post_time_stamp}
        </p>
    </div>
    
) 
export default ArticleText 