// COMPONENTS
import SiteSingleArticle from "./components/SiteSingleArticle"
// CSS
import './SiteArticles.css'
// PROPS
import {  SiteArticleProps } from "Props/SiteProps/SiteArticleProps"
// TOOLS
import { TitleTrimmer } from "Tools/StringTools"

const SiteArticle = (props: SiteArticleProps) => {

    const displayCards = props.data.map(card => {

        const {
            date,
            image,
            title,
            description,
            link
        } = card

        const SingleArticle = {
            date: date ,
            description: description ,
            image: image,
            link: link,
            title: TitleTrimmer(title, 60),
            key: title
        }

        return <SiteSingleArticle {...SingleArticle} />

    }).slice(0, 6)
    
    return (
        <div className="gridywrap">
            {displayCards}
        </div>
    )
}

export default SiteArticle