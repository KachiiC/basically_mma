// COMPONENTS
import FilterCollapsible from "@filter/FilterCollapsible"
import TechniquesTab from "./TechniquesTab"
// PROPS
import { stringDataProps } from "Props/PropsTemplates"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/FetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("backend", "mma/techniques")

const TechniquesData = () => {
    
    const fetch = SiteFetcher(url)

    const TechniquesData = fetch.response.map((technique: stringDataProps) => {

        const {
            description,
            mistakes,
            title,
            tutorial,
        } = technique

        const techniqueContent = (
            <div className="w-90">
                <TechniquesTab
                    description={description}
                    mistakes={mistakes}
                    tutorial={tutorial}
                    title={title}
                />
            </div>
        )
        
        return {
            title: technique.title,
            content: techniqueContent
        }
    })

    const component = (
        <FilterCollapsible 
            data={TechniquesData} 
            width={100} 
        />
    )

    return (
        <SiteRender 
            fetch={fetch}
            component={component}
        />
    )
}

export default TechniquesData