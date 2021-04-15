import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteExternalLink from 'SiteCss/SiteExternalLink';
import SiteTextCrop from 'SiteCss/SiteCrop/SiteTextCrop';
import SiteOverlay from 'SiteCss/SiteOverlay'

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

    const articlesListURL = "https://kachiis-rest.herokuapp.com/backend/mma_articles_list"
    const responseData = SiteFetcher(articlesListURL, articleList)
    const siteArticles = responseData.response

    const displayArticles = siteArticles.map((article, index) => {

        const articleTitle = SiteTextCrop(article.title, 30)
        const text_preview = SiteTextCrop(article.post_description, 120)

        return (
            <div key={index} className="single-article site-span-4 w-90">
                <SiteOverlay>
                    <SiteExternalLink url={article.post_link}>
                        <img src={article.thumbnail_url} alt={article.title} class="site-responsive-image"/>
                    </SiteExternalLink>
                </SiteOverlay>
                <div className="article-text">
                    <SiteExternalLink url={article.post_link}>
                        <h5>{articleTitle}</h5>
                    </SiteExternalLink>
                    <p>{text_preview}</p>
                    <p className="time-stamp">{article.post_time_stamp}</p>
                </div>
            </div>
        )
    })
    
    return(
        <div className="site-grid-system site-articles-container">
            <SiteRender 
                data={responseData}
                component={displayArticles} 
            />
        </div>
    )

}

export default ArticlesList