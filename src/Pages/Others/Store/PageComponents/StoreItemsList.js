import React from 'react'
// Data
import StoreListTemplate from 'Data/Other/Store/StoreListTemplate'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteTextCrop from 'SiteCss/SiteCrop/SiteTextCrop'
import SingleStoreItem from './SingleStoreItem'


const StoreItems = () => {

    const storeItemsURL = "https://kachiis-rest.herokuapp.com/backend/mma_store_list/"
    const responseData = SiteFetcher(storeItemsURL, StoreListTemplate)
    const siteStore = responseData.response

    const storeItemsList = siteStore.map((item, index) => {

        const renderName = SiteTextCrop(item.name, 25)

        return (
            <SingleStoreItem
                name={renderName}
                product_link={item.product_link}
                product_thumbnail={item.product_thumbnail}
                price={item.price}
            />
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