import React from 'react'
// DATA
import TechniquesTemplate from 'Data/Advanced/Techniques/TechniquesTemplate'
// Components
import SiteFetcher from 'SiteTools/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import MaterialUITable from 'Components/ExternalComponents/MaterialUITable/index.d';
import TechniquesDropdown from './TechniquesDropdown';
import { TechniquesListURL } from 'Data/SiteUrlsData';

interface techniqueProps {
    content: any;
    title: string;
    tutorial: string;
    mistakes: string;
    description: string;
}

const TechniquesListTable = () => {

    const responseData = SiteFetcher(TechniquesListURL,TechniquesTemplate)

    const techniquesData = responseData.response.map((technique: techniqueProps) => {
        // Adding a content value to each technique object 
        technique.content = (
            <TechniquesDropdown
                title={technique.title} 
                tutorial={technique.tutorial}
                mistakes={technique.mistakes}
                description={technique.description}
                key={responseData.response.indexOf(technique)}
            />
        )
        return technique
    })

    return (
        <SiteRender 
            data={responseData} 
            component={
                <MaterialUITable 
                    data={techniquesData} 
                    table_columns={4}
                />
            } 
        />
    )

}

export default TechniquesListTable
