import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteTools/SiteExternalLink/index.d'

interface Props {
    link: string;
    ranking: number;
    name: string;
    image: string;
}

const SingleFighter = (props: Props) => (
    <div className="site-span-1 w-80 m-auto">
        <SiteExternalLink url={props.link}>
            <h6>#{props.ranking} - {props.name}</h6>
            <img src={props.image} 
                alt={props.name} 
                className="site-responsive-image"
            />
        </SiteExternalLink>
    </div>
)

export default SingleFighter