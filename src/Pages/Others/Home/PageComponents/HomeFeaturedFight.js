import React from 'react'
// Components
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteExternalLink from 'SiteCss/SiteExternalLink';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
// Data
import featuredFight from 'Data/Other/Home/HomeFeaturedFightData'

const HomeFeaturedFight = () => {
    
    const homeFeaturedFightURL = "https://kachiis-rest.herokuapp.com/api/youtube_featured_video/"
    const responseData = SiteFetcher(homeFeaturedFightURL,featuredFight)
    const homeFeaturedFight = responseData.response

    const featuredFightComponent = (
        
        <div className="home-featured-fight">
            <div className="home-feature-fight-title">Featured Fight</div>
                <div className="w-90 m-auto">
                    <SiteExternalLink url={`https://www.youtube.com/watch?v=${homeFeaturedFight.video_id}`}>
                        <img className="site-responsive-image"
                            src={homeFeaturedFight.video_thumbnail} 
                            alt={responseData.response.video_description}
                        />
                        <div className="home-featured-fight-caption-content">
                            <h6>{homeFeaturedFight.video_title}</h6>
                            <p>{homeFeaturedFight.video_description}</p>
                        </div>
                    </SiteExternalLink>
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