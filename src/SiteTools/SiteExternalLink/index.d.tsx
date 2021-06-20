import React from 'react'
// COMPONENTS
import 'SiteCss/CSS/SiteCss.scss'

interface Props {
    url: string;
    children: any;
}

const SiteExternalLink = (props: Props) => (

    <a href={props.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="site-external-link"
    >
        {props.children}
    </a>
)

export default SiteExternalLink