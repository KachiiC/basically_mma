// PROPS
import { SingleArticleProps } from "Props/SiteProps/SiteArticleProps"
import { IfStatement } from "Tools/FunctionTools"
import { SiteLink } from "Tools/LinkTools"

const SiteSingleArticle = (props: SingleArticleProps) => {

    const { date, image, link, link_type, title, description } = props

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
                    {IfStatement(description)}
                </p>
            </div>
        </>
    )
    
    return (
        <div className="gridytest">
            <SiteLink 
                link={link} 
                type={link_type} 
                placeholder={component}
            />
        </div>
    )
}

export default SiteSingleArticle