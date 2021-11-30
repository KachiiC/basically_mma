// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
// PROPS
import { StoreItemProps } from "Props/SiteProps/StoreItemProps"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"

const Store = () => {

    const fetch = SiteFetcher("https://kachiis-rest.herokuapp.com/backend/mma/store")

    const StoreComponent = () => {

        const allItems = fetch.response.map((item: StoreItemProps) => {
            return {
                title: item.name,
                description: `£${item.price}`,
                image: item.product_thumbnail,
                link: item.product_link,
                link_type: "external",
            }
        })

        return <SiteCards data={allItems}/>
        
    }
    
    return (
        <SiteRender 
            component={<StoreComponent />} 
            fetch={fetch}
        />
    )
}

export default Store