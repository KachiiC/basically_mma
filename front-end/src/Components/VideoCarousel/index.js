import React, { useState, useEffect} from 'react'
// CSS
import './VideoCarousel.css'
import '@brainhubeu/react-carousel/lib/style.css'
// Components
import {Empty} from 'antd'
import Icon from 'react-fa'
import Carousel from '@brainhubeu/react-carousel';
import { CircularProgress } from '@material-ui/core'

const VideoCarousel = (props) => {
    const [youtube, setYoutube] = useState([]) 
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/backend_api/mma_playlist/${props.playlist}`) 
        .then((response) => { 
            return response.json() 
        })
        .then((youtubeDataFromServer) => { 

            setYoutube(youtubeDataFromServer.playlist_video)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, []) 
  
  const youtubeItems = youtube.map((item, index) => (
            <div key={index}>
              <div>
                <p>{item.title}</p>
              </div>
              <a href={`https://www.youtube.com/watch?v=${item.video_id}`}>
                <img className="video-slider-image" src={`${item.thumbnail_url}`} alt="item-cover"/>
              </a>
            </div>
        )
  )
  
  const renderLogic = (isFetching)?(<CircularProgress />):(
    (isDisplayable)?(youtubeItems):(<Empty />))

    return (
            <div className="video-slider-container">
                <h5>UFC Fights</h5>
                <Carousel infinite addArrowClickHandler slidesPerScroll={3} slidesPerPage={3}
                    arrowRight={<Icon size="2x" name="angle-double-right" />}
                    arrowLeft={<Icon size="2x" name="angle-double-left" />}
                >
                    {renderLogic}
                </Carousel>
            </div>

    )
}

export default VideoCarousel;