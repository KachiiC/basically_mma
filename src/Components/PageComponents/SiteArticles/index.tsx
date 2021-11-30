import { SiteLink } from "Tools/LinkTools"

const SiteArticles = (props: any) => {

    const { data } = props

    const displayArticles = data.map((article: any) => {

        const { 
            description,
            link,
            title,
            thumbnail
        } = article

        const ArticleEntry = (props: any) => (
            <div className={`article-${props.type}`}>
                <h3>{title}</h3>
                <img src={thumbnail} 
                    alt={title}
                    className="site-responsive-image"
                />
                <p className="article-description">
                    {description}
                </p>
            </div>
        )

        const articleLogic = (data.indexOf(article) + 1) % 4 === 0 ?
            "large"
            :
            "entry"

        return (
            <article>
                <SiteLink 
                    link={link} 
                    type="external" 
                    placeholder={<ArticleEntry type={articleLogic} />}
                />
            </article>
        )
    }).slice(0, 8)

    return (
        <div className="article-body">
            <div className="grid-wrapper">
                {displayArticles}
            </div>
        </div>
    )
}

export default SiteArticles