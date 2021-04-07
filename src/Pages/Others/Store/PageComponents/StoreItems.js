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

    const storeItemsList = siteStore.map((item, index) => {

        const trimmedName = item.name.split("").slice(0,25).join("") + "..."

        const renderName = item.name.split("").length > 25? trimmedName: item.name

        return(
            <div className="store-item-container site-span-3" key={index}>
                <h4>{renderName}</h4>
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
    })

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