// COMPONENTS
import SiteCollapsible from "Components/SiteComponents/SiteCollapsible"
import TechniquesTab from "./components/TechniqueTab"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("backend", "mma/techniques")

const Techniques = () => {
    
    const fetch = SiteFetcher(url)

    const TechniquesData = fetch.response.map((technique: any) => {

        const {
            description,
            mistakes,
            tutorial,
        } = technique

        const techniqueContent = (
            <div className="w-90">
                <TechniquesTab
                    description={description}
                    mistakes={mistakes}
                    tutorial={tutorial}
                />
            </div>
        )
        return {
            title: technique.title,
            content: techniqueContent
        }
    })

    return (
        <>
            <p>
                Techniques in MMA are generally categorised as either striking and grappling techniques. 
                Striking is any technique which involves punches, kicks, elbows or knees. Although 
                strikes can be thrown on the ground in MMA (commonly referred to as ground and pound), 
                striking is often a term used for techniques used from a standing position. Grappling 
                techniques are a combination of wrestling, judo and Brazilian jiu-jitsu. Techniques 
                used in grappling include takedowns, trips, throws, sweeps, clinching and submission 
                holds. Strikes are often used in grappling exchanges when fighters are jostling for 
                position.
            </p>
            <SiteRender 
                fetch={fetch}
                component={
                    <SiteCollapsible 
                        data={TechniquesData} 
                        width={100} 
                    />
                } 
            />
        </>
    )
}

export default Techniques 