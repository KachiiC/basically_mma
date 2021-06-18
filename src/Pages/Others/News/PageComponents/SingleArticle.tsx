import React from 'react'
// COMPONENTS
import ArticleImage from './ArticleImage'
import ArticleText from './ArticleText'

interface Props {
    icon: any;
    title?: string | undefined;
    thumbnail_url: string;
    post_link: string;
    article_title: string;
    text_preview: string;
    post_time_stamp: string;
}

const SingleArticle = (props: Props) => (
    
    <div className="single-article site-span-4 w-90">
        <ArticleImage
            icon={props.icon}
            title={props.title}
            thumbnail_url={props.thumbnail_url}
            post_link={props.post_link}
        />
        <ArticleText
            post_link={props.post_link}
            article_title={props.article_title}
            text_preview={props.text_preview}
            post_time_stamp={props.post_time_stamp}
        />
    </div>
)


export default SingleArticle