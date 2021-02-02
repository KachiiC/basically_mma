import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';

const HomeFeaturedFight = () => {

    const featuredFight = {
        video_thumbnail: "",
        video_title: "",
        video_id: "",
        video_description: "",
        upload_date: ""
    }
    
    const homeFeaturedFightURL = "https://kachiis-rest.herokuapp.com/api/youtube_featured_video/"
    const responseData = SiteFetcher(homeFeaturedFightURL, featuredFight)
    const homeFeaturedFight = responseData.response

    const featuredFightComponent = (

        <div className="home-featured-fight">
            <img className="site-responsive-image"
                src={homeFeaturedFight.video_thumbnail} 
                alt={responseData.response.video_description}
            />
            <div className="caption-content">
                <h6>{homeFeaturedFight.video_title}</h6>
                <p>{homeFeaturedFight.video_description}</p>
            </div>
        </div>

    )

    return (    
        <div className="home-feature site-span-8">
            <SiteRender 
                data={responseData}
                component={featuredFightComponent} 
            />
        </div>
    )
}

export default HomeFeaturedFight