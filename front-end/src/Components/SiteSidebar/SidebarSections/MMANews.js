import React, { useState, useEffect} from 'react'
// CSS
import './index.css'
// Components
import {Empty} from 'antd'


const MMANews = () => {

    const [mmaNews, setMMANews] = useState([]) 
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/backend_api/mma_news/") 
        .then((response) => { 
            return response.json() 
        })
        .then((newsDataFromServer) => { 
  
            setMMANews(newsDataFromServer)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, []) 

    const displayedArticles = mmaNews.slice(0,3)

    const renderListOfArticles = displayedArticles.map((newsArticle, index) => (
            <div className="sidebar-list" key={index}>
                <a href={newsArticle.article} target="_blank" rel="noreferrer noopener">
                    <img src={newsArticle.thumbnail_url} alt="news pic"/>
                    <div className="side-list-heading">
                        <p>{newsArticle.title}</p>
                    </div>
                </a>                
            </div>
        )
    )

    const renderLogic = (isFetching)?(
        <h6>Loading</h6>
    ):((isDisplayable)?(renderListOfArticles):(<Empty />))

    return (
        <div className="single-widget-area">
            <div className="widget-title">
                <h6>MMA News</h6>
            </div>
            {renderLogic}
        </div>

    )
}

export default MMANews