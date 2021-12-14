// COMPONENTS
import FighterRankings from "./components/FighterRankings"
import TiltCards from "@components/TiltCards"
// DATA
import { FightersWeightData } from "@data/MMAWorld/Pages/Fighters"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const Fighters = () => {

    const fetch = SiteFetcher(KachiiRestApi("backend", "mma/fighters/"))

    const displayCards = FightersWeightData.map(weight_class => {

        const correctWeightClass = fetch.response.filter(fighter => fighter["weight_class"] === weight_class.title)

        return {
            name: `${weight_class.limit}lbs`,
            type: weight_class.title,
            image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/gallery_collapsed_mobile_1x/s3/2019-01/NewBelt2.jpg?VersionId=QTqmGSfeyPNhAc4ZcrkEzrPce5Di21Mt&itok=z5VRzPph",
            content: <FighterRankings data={correctWeightClass}/>
        }
    })

    const component = <TiltCards data={displayCards}/>

    return (
        <SiteRender 
            fetch={fetch} 
            component={component}
        />
    )
    
}

export default Fighters