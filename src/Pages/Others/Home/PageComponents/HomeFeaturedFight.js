import React, {useState,useEffect} from 'react'
// Components
// CSS
import { Empty } from 'antd';
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading';

const HomeFeaturedFight = () => {

    const [featuredFight, setFeaturedFight] = useState({
        video_thumbnail: "",
        video_title: "",
        video_id: "",
        video_description: "",
        upload_date: ""
    })
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/youtube_featured_video/")
        .then(fetchedData => fetchedData.json())
        .then(featuredFightData => {
                setIsDisplayable(true)
                setIsFetching(false)
                setFeaturedFight(featuredFightData)
            }
        )
        .catch(error => {
            setIsFetching(false)
            console.log(error)
        })
    },[])

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable) ? (
            <div className="home-featured-fight">
                <img className="site-responsive-image"
                    src={featuredFight.video_thumbnail} 
                    alt={featuredFight.video_description}
                />
                <div className="caption-content">
                    <h6>{featuredFight.video_title}</h6>
                    <p>{featuredFight.video_description}</p>
                </div>
            </div>
        ):(
            <Empty />
        )
    )


    return (    
        <div className="home-feature site-span-8">
            {renderLogic}
        </div>
    )
}

export default HomeFeaturedFight