import React from 'react'
// CSS
import './SiteSectionTitle.css'

const SiteSectionTitle = (props) => (
    <div className={`site-section-title w-90`}>
        {props.title}
    </div>
)

export default SiteSectionTitle