import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteCss/SiteExternalLink'
import SiteOverlay from 'SiteCss/SiteOverlay'
import SiteIcon from 'SiteCss/SiteIcon'

const StoreItems = (props) => (

    <div className="store-item-container site-span-3" key={props.index}>
        <h4>{props.name}</h4>
        <SiteOverlay
            click={props.click} 
            icon={<SiteIcon icon="shopping-cart" color="gold"/>}
        >
            <div className="store-item-image-container">
                <SiteExternalLink url={props.product_link}>
                    <img src={props.product_thumbnail} 
                        alt={props.index} 
                        class="site-responsive-image"
                        />
                </SiteExternalLink>
            </div>
        </SiteOverlay>
        <h5>£{props.price}</h5>
    </div>
    
)

export default StoreItems