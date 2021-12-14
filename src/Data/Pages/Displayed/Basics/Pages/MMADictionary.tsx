import FilterCollapsible from "Components/FilterComponents/FilterCollapsible"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("backend", "mma/dictionary")

const MMADictionary = () => {

    const fetch = SiteFetcher(url)

    const DictionaryComponent = () => {

        const dictionaryData = fetch.response.map((term: {title: string; definition: string}) => {
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
            />
        )
    }

    return (
        <>
            <p>
                As with any sport, before you learn about strategies and the finer details - you should 
                start by learning the language of MMA. As mixed marial art is a blend of all martial arts, 
                techniques and positions generally originate from other combat sports.
            </p>
            <p>
                Most striking techniques derive from sports such a boxing, muaythai or taekwondo, whilst 
                most grappling techniques and positions derive from wrestling, judo and Brazilian jiu-jitsu.
            </p>
            <SiteRender 
                component={<DictionaryComponent/>} 
                fetch={fetch}
            />
        </>
    )
}

export default MMADictionary