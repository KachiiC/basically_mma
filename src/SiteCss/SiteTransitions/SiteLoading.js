import React from 'react'
// CSS
import './SiteTransitions.css'

const SiteLoading = (props) => (
    <div className={`data-container site-span-${props.span}` }>
        <div className="site-loading" />
    </div>
)


export default SiteLoading