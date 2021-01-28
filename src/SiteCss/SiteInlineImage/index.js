import React from 'react'
// CSS
import './SiteInlineImage.css'

const SiteInlineImage = (props) => 
<div className="site-inline-image-container">
    <img src={props.url} alt="inline_pic" className="site-responsive-image"/>
</div>

export default SiteInlineImage