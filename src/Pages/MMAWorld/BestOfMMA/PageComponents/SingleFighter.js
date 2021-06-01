import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteCss/SiteExternalLink'

const SingleFighter = (props) => (
    <div className="site-span-1 w-80 m-auto">
        <SiteExternalLink url={props.link}>
            <h6>#{props.ranking} - {props.name}</h6>
            <img src={props.image} 
                alt={props.index} 
                className="site-responsive-image"
            />
        </SiteExternalLink>
    </div>
)

export default SingleFighter