import React from 'react'
// Data
import StoreListTemplate from 'Data/Other/Store/StoreListTemplate'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteTextCrop from 'SiteCss/SiteCrop/SiteTextCrop'
import SingleStoreItem from './SingleStoreItem'

interface itemProps {
    name: string;
    click: any;
    product_link: string;
    product_thumbnail: string;
    price: string | number;
}

const StoreItems = () => {

    const storeItemsURL = "https://kachiis-rest.herokuapp.com/backend/mma_store_list/"
    const responseData = SiteFetcher(storeItemsURL, StoreListTemplate)
    const siteStore = responseData.response

    const storeItemsList = siteStore.map((item: itemProps) => {

        const renderName = SiteTextCrop(item.name, 25)

        return (
            <SingleStoreItem
                name={renderName}
                product_link={item.product_link}
                product_thumbnail={item.product_thumbnail}
                price={item.price}
                key={item.name}
            />
        )
    })

    return (
        <div className="site-grid-system"> 
            <SiteRender 
                data={responseData}
                component={storeItemsList} 
                span={12}
            />
        </div>
    )
}

export default StoreItems