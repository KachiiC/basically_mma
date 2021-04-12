import React, {useState} from 'react'
// Components
import SiteVideoModal from 'Components/SiteVideoModalPlayer'
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteOverlay from 'SiteCss/SiteOverlay'
// Data
import featuredFight from 'Data/Other/Home/HomeFeaturedFightData'

const homeFeaturedFightURL = "https://kachiis-rest.herokuapp.com/api/youtube_featured_video/"

const HomeFeaturedFight = () => {
    
    const responseData = SiteFetcher(homeFeaturedFightURL,featuredFight)
    const homeFeaturedFight = responseData.response

    const [showModal, setShowModal] = useState(false)
    const handleModal = () => showModal === true ? setShowModal(false) :setShowModal(true)

    const featuredFightComponent = (
        <div className="home-featured-fight cursor-pointer">
                <div className="fight-title">Featured Fight</div>
                <div className="w-90 m-auto">
                    <SiteOverlay>
                        <img className="site-responsive-image"
                            src={homeFeaturedFight.video_thumbnail} 
                            alt={responseData.response.video_description}
                            onClick={handleModal}
                            />
                    </SiteOverlay>
                    <div className="caption-content">
                        <h6>{homeFeaturedFight.video_title}</h6>
                        <p>{homeFeaturedFight.video_description}</p>
                    </div>
                </div>
            </div>

    )

    return (   
        <> 
        <div className="home-feature site-span-8">
            <SiteRender 
                data={responseData}
                component={featuredFightComponent} 
            />
        </div>
        {showModal && (
            <SiteVideoModal 
                youtube_id={homeFeaturedFight.video_id} 
                description={homeFeaturedFight.video_description}
                upload_date={homeFeaturedFight.upload_date}
                video_title={homeFeaturedFight.video_title}
                closeModal={handleModal}
            />
        )}
        </>
    )
}

export default HomeFeaturedFight