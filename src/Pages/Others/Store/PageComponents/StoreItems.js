import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteExternalLink from 'SiteCss/SiteExternalLink';

const StoreItems = () => {

    const storeList = [
        {
            name: "",
            price: "",
            product_thumbnail: "",
            product_link: ""
        }
    ]

    const storeItemsURL = "https://kachiis-rest.herokuapp.com/backend/mma_store_list/"
    const responseData = SiteFetcher(storeItemsURL, storeList)
    const siteStore = responseData.response

    const storeItemsList = siteStore.map((item, index) => (

            <div className="store-item-container site-span-6" key={index}>
                <h4>{item.name}</h4>
                <div className="store-item-image-container">
                    <SiteExternalLink url={item.product_link}>
                        <img src={item.product_thumbnail} 
                            alt={index} 
                            class="site-responsive-image"
                    />
                    </SiteExternalLink>
                </div>
                <h5>£{item.price}</h5>
            </div>

        )
    )

    return (
        <div className="site-grid-system">    
            <SiteRender 
                data={responseData}
                component={storeItemsList} 
            />
        </div>
    )
}

export default StoreItems