import React from 'react'
// CSS
import './SiteSectionTitle.css'

const SiteSectionTitle = (props) => {

    const widthLogic = props.width ? props.width : 90

    return (
        <div className={`site-section-title w-${widthLogic}`}>
            {props.title}
        </div>
    )
}

export default SiteSectionTitle