import React, { useState, useEffect} from 'react'
// CSS
import './index.css'
import {Empty} from 'antd'
import { CircularProgress } from '@material-ui/core'
// Components


const MMANews = (props) => {

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

    const displayedArticles = mmaNews.slice(0, props.number_of_articles)

    const renderListOfArticles = displayedArticles.map((newsArticle, index) => {

        const articleTitle = newsArticle.title.split("").slice(0,77).join("")

        return (
            <div className="sidebar-list" key={index}>
                <a href={newsArticle.article} target="_blank" rel="noreferrer noopener">
                    <img src={newsArticle.thumbnail_url} alt="news pic"/>
                    <div className="side-list-heading">
                        <p>{articleTitle}</p>
                    </div>
                </a>                
            </div>
        )
    })

    const renderLogic = (isFetching)?(
        <CircularProgress />
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