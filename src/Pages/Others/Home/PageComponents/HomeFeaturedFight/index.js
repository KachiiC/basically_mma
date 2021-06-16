import React, {useState} from 'react'
// CSS
import './CSS/HomeFeaturedFight.css'
// Components
import SiteVideoModalPlayer from 'Components/SiteVideoModalPlayer'
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
// Data
import featuredFightData from 'Data/Other/Home/HomeFeaturedFightData'
import FeaturedFight from './Components/FeaturedFight';

const homeFeaturedFightURL = "https://kachiis-rest.herokuapp.com/api/youtube_featured_video/"
const suggestions_url = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights"

const HomeFeaturedFight = () => {
    
    const responseData = SiteFetcher(homeFeaturedFightURL,featuredFightData)
    const homeFeaturedFight = responseData.response

    const [showModal, setShowModal] = useState(false)

    const handleModal = () => !showModal ? setShowModal(true) : setShowModal(false) 

    const featuredFightComponent = (
        <FeaturedFight
            click={handleModal}
            video_thumbnail={homeFeaturedFight.video_thumbnail}
            video_description={homeFeaturedFight.video_description}
            video_title={homeFeaturedFight.video_title}
        />
    )

    return (   
        <> 
            <SiteRender 
                data={responseData}
                component={featuredFightComponent} 
            />
            {showModal && (
                <SiteVideoModalPlayer
                    youtube_id={homeFeaturedFight.video_id} 
                    description={homeFeaturedFight.video_description}
                    upload_date={homeFeaturedFight.upload_date}
                    video_title={homeFeaturedFight.video_title}
                    closeModal={handleModal}
                    suggestions_url={suggestions_url}
                />
            )}
        </>
    )
}

export default HomeFeaturedFight