import React from 'react'

const SiteExternalLink = (props) => 

<a href={props.url} 
    target="_blank" 
    rel="noopener noreferrer"
>
    {props.children}
</a>

export default SiteExternalLink