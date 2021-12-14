// COMPONENTS
import { SidebarVideoRows } from "../SidebarVideoRows"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("api", "youtube/playlist%3DPLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5")

const SidebarRecommendation = () => {
    
    const fetch = SiteFetcher(url)

    const components = (
        <SidebarVideoRows 
            data={fetch.response} 
        />
    )
 
    return (
        <>
            <div className="sidebar-section-header">
                Recommended Fights
            </div>
            <SiteRender 
                fetch={fetch} 
                component={<>{components}</>}
            />
        </>
    )
}

export default SidebarRecommendation