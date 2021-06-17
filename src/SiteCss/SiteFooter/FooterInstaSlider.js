import React from 'react'
// Data
import instaData from 'Data/Other/Footer/instaFooterData'
// Components
import SiteSlider from 'Components/SiteSlider'
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteFetcher from 'SiteCss/SiteFetcher'

const HomeInstaSlider = () => {

    const instagramURL = "https://kachiis-rest.herokuapp.com/api/instagram_list_refresh/"
    const responseData = SiteFetcher(instagramURL, instaData)
    const instaDisplay = responseData.response

    const instaSlider = (
        <SiteSlider 
            data={instaDisplay}
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