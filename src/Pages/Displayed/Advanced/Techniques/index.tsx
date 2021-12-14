// COMPONENTS
import SiteCollapsible from "@components/SiteCollapsible"
import TechniquesIntroduction from "./components/TechniquesIntro"
import TechniquesTab from "./components/TechniqueTab"
// PROPS
import { stringDataProps } from "Props/PropsTemplates"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("backend", "mma/techniques")

const Techniques = () => {
    
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
        <SiteCollapsible 
            data={TechniquesData} 
            width={100} 
        />
    )

    return (
        <>
            {TechniquesIntroduction}
            <SiteRender 
                fetch={fetch}
                component={component}
            />
        </>
    )
}

export default Techniques 