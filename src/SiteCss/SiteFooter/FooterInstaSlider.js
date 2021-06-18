import React from 'react'
// Data
import instaData from 'Data/Other/Footer/instaFooterData'
// Components
import SiteSlider from 'Components/SiteSlider'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteFetcher from 'SiteTools/SiteFetcher'
// LINKS
import { InstagramURL } from 'Data/SiteUrlsData'

const HomeInstaSlider = () => {

    const responseData = SiteFetcher(InstagramURL, instaData)

    const instaSlider = (
        <SiteSlider 
            data={responseData.response}
            displayed_slides={6} 
            title="Follow us on instagram! @basically_mma" 
            type="instagram"
        />
    )

    return (
        <SiteRender 
            data={responseData}
            component={instaSlider} 
        />
    )

}

export default HomeInstaSlider