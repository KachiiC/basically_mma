import React from 'react'
import 'SiteCss/SiteCss.css'

const SiteExternalLink = (props) => 

    <a href={props.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="site-external-link"
    >
        {props.children}
    </a>

export default SiteExternalLink