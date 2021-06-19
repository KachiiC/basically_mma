import React from 'react'
// Components
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import { DictionaryListTemplate } from 'Data/Basics/MMADictionary/MMADictionary'
import AntdCollapsable from 'Components/ExternalComponents/AntdCollapsable'
import DictionaryPanel from './DictionaryPanel'
import { DictionaryListURL } from 'Data/SiteUrlsData'

interface termProps {
    content: any;
    title: string;
    example_type: string;
    definition: string;
    example: string;
}

const Dictionary = () => {

    const responseData = SiteFetcher(DictionaryListURL, DictionaryListTemplate)

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