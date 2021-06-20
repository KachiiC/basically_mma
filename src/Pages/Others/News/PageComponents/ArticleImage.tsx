import React from 'react'
import SiteExternalLink from 'SiteTools/SiteExternalLink/index.d'
import SiteOverlay from 'SiteCss/SiteOverlay'

interface Props {
    icon: any;
    title?: string;
    thumbnail_url: string;
    post_link: string;
}

const ArticleImage = (props: Props) => (
    <SiteOverlay icon={props.icon}>
        <SiteExternalLink url={props.post_link}>
            <img src={props.thumbnail_url} 
                alt={props.title} 
                className="site-responsive-image"
            />
        </SiteExternalLink>
    </SiteOverlay>
)

export default ArticleImage