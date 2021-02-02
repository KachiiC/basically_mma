import React from 'react'
// Components
import DictionaryComponents from './DictionaryComponents';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';

const Dictionary = () => {

    const dictionaryList = [{
        title: "",
        type: "",
        example_type: "",
        example: "",
        definition: "",
    }]

    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_dictionary_list/",
        dictionaryList
    )

    const tab_types = [
        "General", 
        "Striking Technique",
        "Grappling Position",
        "Grappling Technique",
        "Submission"
    ]

    const allTabs = tab_types.map((tab_type, index) => 
        <DictionaryComponents
            key={index}
            data={responseData.response} 
            type={tab_type}
        />
    )

    return (  
        <div className="dictionary-container">
            <SiteRender data={responseData} component={allTabs} />
        </div>
    );

}

export default Dictionary