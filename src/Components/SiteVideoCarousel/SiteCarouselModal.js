import React,{useState, useEffect} from 'react'
// CSS
import { Empty } from 'antd'
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading'
// Components
import SiteModal from 'Components/SiteModal'
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'

const SiteCarouselModal = (props) => {

    const [currentYoutubeId, setCurrentYoutubeId] = useState({
        "youtube_id": props.youtube_id,
        "upload_date": props.upload_date,
        "description": props.description
        
    })
    const [fightSuggestions, setFightSuggestions] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch(
            "https://kachiis-rest.herokuapp.com/api/youtube_playlists/PLaaEeFtNlIJ1QCSWkBvxItbKYEpGENASC/"
        ) 
        .then((response) => response.json())
        .then(highlightsData => { 
            setFightSuggestions(highlightsData.playlist_videos)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
            console.log(error)
        })
    },[])

    const displayFightSuggestion = fightSuggestions.slice(0,4).map((fight, index) => {

        const handleClick = () => {
            setCurrentYoutubeId({
                "youtube_id": fight.video_id,
                "upload_date": fight.upload_date,
                "description": fight.video_description
            })
        }

        return (
            <div className="gallery-fight-suggestions-section" key={index}>
                <div className="gallery-fight-suggestion-image-container">
                    <img src={fight.video_thumbnail} 
                        alt={index} 
                        onClick={handleClick}
                    />           
                </div>
                <div className="gallery-fight-suggestion-title">
                    {fight.video_title}
                </div>
            </div>
        )
    })

    console.log(currentYoutubeId)

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable)? (
            displayFightSuggestion
        ):(
            <Empty />
        )
    )

    return (
        <SiteModal closeModal={props.closeModal} width="70%" style={{overflowY: "scroll"}}>
            <div className="gallery-modal-video-section">
                <div className="gallery-selected-video">
                    <SiteYoutubeVideo youtube_id={currentYoutubeId.youtube_id}    
                />
                </div>
                <div className="gallery-modal-description-section">
                    <b>Date Posted: {currentYoutubeId.upload_date}</b>
                    <br/>
                    <div className="gallery-modal-description">
                        {currentYoutubeId.description}
                    </div>
                </div>
            </div>
            <div className="gallery-modal-suggestions-section">
                <div className="gallery-fight-suggestions-header">
                    Have you seen these fights?
                </div>
                {renderLogic}
            </div>
        </SiteModal>
    )

}

export default SiteCarouselModal
