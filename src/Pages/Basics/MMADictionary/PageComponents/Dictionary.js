import React from 'react'
// Components
import DictionaryComponents from './DictionaryComponents';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import {
    DictionaryListTemplate, 
    DictionaryTabTypes
} from 'Data/Basics/MMADictionary/MMADictionary'

const Dictionary = () => {

    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_dictionary_list/",
        DictionaryListTemplate
    )

    const allTabs = DictionaryTabTypes.map((tab_type, index) => 
        <DictionaryComponents
            key={index}
            data={responseData.response} 
            type={tab_type}
        />
    )

    return (  
        <div className="dictionary-container">
            <SiteRender 
                data={responseData} 
                component={allTabs} 
            />
        </div>
    );

}

export default Dictionary