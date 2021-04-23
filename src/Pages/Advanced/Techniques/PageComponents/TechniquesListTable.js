import React from 'react'
// DATA
import TechniquesTemplate from 'Data/Advanced/Techniques/TechniquesTemplate'
// Components
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import MaterialUITable from 'Components/ExternalComponents/MaterialUITable';
import TechniquesDropdown from './TechniquesDropdown';

const TechniquesListTable = () => {

    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_techniques_list/",
        TechniquesTemplate
    )

    const techniquesData = responseData.response.map((technique) => {
        technique.content = (
            <TechniquesDropdown
                title={technique.title} 
                tutorial={technique.tutorial}
                mistakes={technique.mistakes}
                description={technique.description}
            />
        )
        return technique
    })

    const TechniquesTable = (
        <MaterialUITable 
            data={techniquesData} 
            table_columns={4}
        />
    )

    return (
        <SiteRender 
            data={responseData} 
            component={TechniquesTable} 
        />
    )

}

export default TechniquesListTable
