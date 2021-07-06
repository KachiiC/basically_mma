import React from 'react'
// CSS
import './CSS/HomeFeaturedFight.css'
// Components
import SiteVideoModalPlayer from 'Components/MyComponents/SiteVideoModalPlayer/index.d'
import SiteFetcher from 'SiteTools/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteSectionTitle from 'SiteCss/SiteSectionTitle';
import { modalProps } from 'SiteRedux/SiteModal/ReduxModalProps'
import { modalConnector } from 'SiteRedux/SiteModal/ReduxModalProps'
// Data
import featuredFightData from 'Data/Other/Home/HomeFeaturedFightData'
import FeaturedFight from './Components/FeaturedFight';
import { FeaturedFightURL, SuggestedFightsURL } from 'Data/SiteUrlsData'


const HomeFeaturedFight = (props: modalProps) => {
    
    const responseData = SiteFetcher(FeaturedFightURL,featuredFightData)
    const homeFeaturedFight = responseData.response

    const { dispatchShowModal } = props;

    const handleClick = () => dispatchShowModal({content: modalContent})

    const featuredFightComponent = (
        <FeaturedFight
            click={handleClick}
            video_thumbnail={homeFeaturedFight.video_thumbnail}
            video_description={homeFeaturedFight.video_description}
            video_title={homeFeaturedFight.video_title}
        />
    )

    const modalContent = (
        <h1>Modal Content</h1>
        // <SiteVideoModalPlayer 
        //     youtube_id={homeFeaturedFight.video_id} 
        //     description={homeFeaturedFight.video_description}
        //     upload_date={homeFeaturedFight.upload_date}
        //     video_title={homeFeaturedFight.video_title}
        //     suggestions_url={SuggestedFightsURL}
        // />
    )

    return (
        <div className="home-featured-fight site-span-8">
            <SiteSectionTitle title="Feature Fight" />
            <SiteRender 
                data={responseData}
                component={featuredFightComponent} 
            />
        </div>
    )
}

export default modalConnector(HomeFeaturedFight)