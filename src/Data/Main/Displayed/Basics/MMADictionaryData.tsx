// COMPONENTS
import FilterCollapsible from "Components/FilterComponents/FilterCollapsible"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/FetcherTool"
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("backend", "mma/dictionary")

interface dictionaryProp {
    title: string 
    definition: string
}

const MMADictionaryData = () => {

    const fetch = SiteFetcher(url)

    const DictionaryComponent = () => {

        const dictionaryData = fetch.response.map((term: dictionaryProp) => {
            const term_content = (
                <>
                    <p>{term.definition}</p>
                </>
            )
            return {
                title: term.title,
                content: term_content
            }
        })

        return (
            <FilterCollapsible 
                data={dictionaryData}
                placeholder="Enter a MMA term here!"
                width={100}
            />
        )
    }

    return (
        <SiteRender 
            component={<DictionaryComponent/>} 
            fetch={fetch}
        />
    )
}

export default MMADictionaryData