import React, { useState, useEffect} from 'react'
//Components
import { Empty } from 'antd'
import { CircularProgress } from '@material-ui/core'


const MMAHighlights = (props) => {

    const [isFetching, setIsFetching] = useState(true)
    const [highlightVideo, setHighlightVideo] = useState([]) 
    const [isDisplayable, setIsDisplayable] = useState(false)
  
    useEffect(() => {
        fetch("http://127.0.0.1:8000/backend_api/mma_playlist/fight_highlights") 
        .then((response) => { 
            return response.json() 
        })
        .then((videoDataFromServer) => { 
  
            setHighlightVideo(videoDataFromServer.playlist_video)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, []) 

    const displayedHighlights = highlightVideo.slice(0,props.number_of_videos)

    const renderListOfVideos = displayedHighlights.map((highlight, index) => (

            <div className="sidebar-list" key={index}>
                <a href={`https://www.youtube.com/watch?v=${highlight.video_id}`} 
                    target="_blank" rel="noreferrer noopener">
                    <img src={highlight.thumbnail_url} alt="video pic"/>
                    <div className="side-list-heading">
                        <p>{highlight.title}</p>
                    </div>
                </a>
            </div>

        )
    )

    const renderLogic = (isFetching)?(
        <CircularProgress />
    ):((isDisplayable)?(renderListOfVideos):(<Empty />))


    return (
        <div className="single-widget-area">
            <div className="widget-title">
                <h6>MMA Highlights</h6>
            </div>
            {renderLogic}
        </div>
    )
}

export default MMAHighlights