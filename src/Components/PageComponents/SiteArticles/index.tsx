// COMPONENTS
import SiteSingleArticle from "./components/SiteSingleArticle"
// CSS
import './SiteArticles.css'
// PROPS
import {  SiteArticleProps } from "Props/SiteProps/SiteArticleProps"
// TOOLS
import { TitleTrimmer } from "Tools/StringTools"

const SiteArticle = (props: SiteArticleProps) => {

    const { data, link_type } = props

    const displayCards = data.map(card => {

        const {
            date,
            image,
            title,
            description,
            link
        } = card

        const linkLogic = link_type === "external" ? link : `/${link}`

        const SingleArticle = {
            date: date ,
            description: description ,
            image: image,
            link: linkLogic,
            title: TitleTrimmer(title, 60),
            key: title,
            link_type: link_type
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