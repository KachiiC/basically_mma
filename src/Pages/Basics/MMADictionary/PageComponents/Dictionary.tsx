import React from 'react'
// Components
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import { DictionaryListTemplate } from 'Data/Basics/MMADictionary/MMADictionary'
import AntdCollapsable from 'Components/ExternalComponents/AntdCollapsable'
import DictionaryPanel from './DictionaryPanel'

interface termProps {
    content: any;
    title: string;
    example_type: string;
    definition: string;
    example: string;
}

const Dictionary = () => {

    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_dictionary_list/",
        DictionaryListTemplate
    )

    const DictionaryData = responseData.response.map((term: termProps) => {

        term.content = (
            <DictionaryPanel
                key={term.title}
                example_type={term.example_type}
                title={term.title}
                definition={term.definition}
                example={term.example}
            />
        )

        return term
    }) 

    return (  
        <div className="dictionary-container w-90">
            <SiteRender 
                data={responseData} 
                component={
                    <AntdCollapsable data={DictionaryData} />
                } 
            />
        </div>
    );

}

export default Dictionary