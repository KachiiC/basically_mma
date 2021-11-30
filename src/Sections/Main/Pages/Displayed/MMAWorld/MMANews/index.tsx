// COMPONENTS
import SiteArticles from "Components/PageComponents/SiteArticles"
// CSS
import './MMANews.css'
// TOOLS
import MMANewsDataTool from "./tools/MMANewsDataTool"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const news_url = KachiiRestApi("backend", "mma/articles/")

const MMANews = () => {

    // FETCH
    const fetch = SiteFetcher(news_url)

    const component = (
        <SiteArticles 
            data={MMANewsDataTool(fetch.response)} 
        />
    )

    return (
        <div className="mma-news-page">
            <SiteRender 
                fetch={fetch} 
                component={component} 
            />
        </div>
    )
}

export default MMANews