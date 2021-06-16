import React from 'react'
// CSS
import './CSS/HomeFeaturedFighter.css'
import './CSS/Responsive.css'
// COMPONENTS
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteSectionTitle from 'SiteCss/SiteSectionTitle'
import FeaturedFighterTemplate from 'Data/Other/Home/HomeFeaturedFighter'
// DATA
import FeaturedFighterImage from './Components/FeaturedFighterImage'
import FeaturedFighterTable from './Components/FeaturedFighterTable'

const featured_fighter_url = "https://kachiis-rest.herokuapp.com/backend/mma_featured_fighter"

const HomeFeaturedFighter = () => {

    const responseData = SiteFetcher(
        featured_fighter_url,
        FeaturedFighterTemplate
    )

    const featured_fighter_name = responseData.response.first_name + " " + responseData.response.last_name
    
    const renderFeaturedFighter = (

        <div className="site-span-4 featured-fighter">
            <SiteSectionTitle title="Featured Fighter" />
            <h4>{featured_fighter_name}</h4> 
            <div className="featured-fighter-profile">
                <FeaturedFighterImage data={responseData.response} />
                <FeaturedFighterTable data={responseData.response} />            
            </div>
        </div>
        
    )

    return (

        <SiteRender 
            data={responseData}
            component={renderFeaturedFighter}
        />

    )

}

export default HomeFeaturedFighter