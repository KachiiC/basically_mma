import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteExternalLink from 'SiteCss/SiteExternalLink';

const ArticlesList = () => {

    const articleList = [
        {
            title: "",
            thumbnail_url: "",
            post_time_stamp: "",
            post_description: "",
            post_link: ""
        }
    ]

    const articlesListURL = "http://kachiis-rest.herokuapp.com/backend/mma_articles_list/"
    const responseData = SiteFetcher(articlesListURL, articleList)
    const siteArticles = responseData.response

    const displayArticles = siteArticles.map((article, index) => (
        <div key={index} className="site-article-entry-container">
            <div className="site-article-image-container">
                <SiteExternalLink url={article.post_link}>
                    <img src={article.thumbnail_url} alt={article.title} class="site-responsive-image"/>
                </SiteExternalLink>
            </div>
            <div className="site-article-text">
                <SiteExternalLink url={article.post_link}>
                    <h5>{article.title}</h5>
                </SiteExternalLink>
                <p>{article.post_time_stamp}</p>
                <p>{article.post_description}</p>
            </div>
        </div>
    ))
    
    return(
        <div className="site-article-list-container">
            <SiteRender 
                data={responseData}
                component={displayArticles} 
            />
        </div>
    )

}

export default ArticlesList