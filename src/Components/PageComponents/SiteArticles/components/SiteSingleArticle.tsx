// PROPS
import { SingleArticleProps } from "Props/SiteProps/SiteArticleProps"
import { SiteLink } from "Tools/LinkTools"

const SiteSingleArticle = (props: SingleArticleProps) => {

    const { date, image, link, title, description } = props

    const imageUrl = {
        "backgroundImage": `url('${image}')`
    }

    const component = (
        <>
            <div className="gridimg" 
                style={imageUrl} 
            />
            <div className="gridinfo">
                <h3>{title}</h3>
                <div className="gridmeta">
                    <p className="gridwhen">
                        {date}
                    </p>
                </div>
                <p className="gridexerpt">
                    {description}
                </p>
            </div>
        </>
    )
    
    return (
        <div className="gridytest">
            <SiteLink 
                link={link} 
                type={"external"} 
                placeholder={component}
            />
        </div>
    )
}

export default SiteSingleArticle