import React from 'react'
// Components
import SiteRender from 'SiteCss/SiteTransitions/SiteRender'
import SiteFetcher from 'SiteCss/SiteFetcher'
import SiteTextCrop from 'SiteCss/SiteCrop/SiteTextCrop'
// Icons
import ArticlesListData from 'Data/Other/Articles/ArticlesListTemplate'
import SiteIcon from 'SiteCss/SiteIcon'
import SingleArticle from './SingleArticle'

interface articleProps {
    title: string;
    post_description: string;
    post_link: string;
    thumbnail_url: string;
    post_time_stamp: string;

}

const ArticlesList = () => {

    const articlesListURL = "https://kachiis-rest.herokuapp.com/backend/mma_articles_list"
    const responseData = SiteFetcher(articlesListURL, ArticlesListData)
    const siteArticles = responseData.response

    const displayArticles = siteArticles.map((article: articleProps) => {

        const readIcon = <SiteIcon icon="read-me" color="white" />
        const articleTitle = SiteTextCrop(article.title, 30)
        const text_preview = SiteTextCrop(article.post_description, 120)

        return (
            <SingleArticle 
                key={siteArticles.indexOf(article)}
                icon={readIcon}
                post_link={article.post_link}
                thumbnail_url={article.thumbnail_url}
                article_title={articleTitle}
                text_preview={text_preview}
                post_time_stamp={article.post_time_stamp}
            />
        )
    })
    
    return(
        <div className="site-grid-system site-articles-container">
            <SiteRender 
                data={responseData}
                component={displayArticles}
                span={12}
            />
        </div>
    )

}

export default ArticlesList