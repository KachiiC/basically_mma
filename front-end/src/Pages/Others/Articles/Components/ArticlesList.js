import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// Components


const ArticlesList = () => {

    const [newsArticles, setArticles] = useState([])
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/backend_api/mma_news/")
        .then((response) => {
            return response.json()
        })
        .then((articleData) => {
            setArticles(articleData)
        })
        .catch((error) => { 
            console.log(error)
        })
    },[])
    
    const listOfArticles = newsArticles.map((post) => {
        return (
            <div className="trending-posts d-sm-flex">
                <div className="trending-pics">
                    <img src={post.img_url} alt="post-cover"/>
                </div>
                <div className="trending-content">
                    <div className="trending-meta">
                        <div className="trending-date-author">
                            <div className="trending-author">
                                By <Link href="#">{post.author}</Link>
                            </div>
                            <div>
                                <Link href="#">Date</Link>
                            </div>
                        </div>
                    </div>
                    <Link to='#'>
                        <h5 className="trending-headline">{post.title}</h5>
                    </Link>
                        <p>{post.description}</p>
                        <div className="trending-button-container">
                            <Link to="#" className="read-button">
                                <div className="button-text">Read Article</div>
                            </Link>
                        </div>
                </div>
            </div>
        )        
    })


    return (
            <div className="main-container">
                <h2>News Articles</h2>
                <div className="post-container">
                    {listOfArticles}
                </div>
            </div>
    )

}

export default ArticlesList