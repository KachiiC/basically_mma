// PROPS
import { SiteSingleCardProps } from "Props/Components/CardProps"
import { SiteLink } from "Tools/LinkTools"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const PictureIconCard = (props: SiteSingleCardProps) => {
    
    const {
        title,
        type,
        description,
        image,
        icon,
        link,
        link_type
    } = props

    const imageUrl = {
        "backgroundImage" : `url('${image}')`
    }
    
    const cardComponent = (
        <>
            <div className="img-avatar">
                <SiteIcon type={icon} color="black"/>
            </div>
            <div className="picture-icon-card-text">
                <div className="portada" 
                    style={imageUrl}
                />
                <div className="title-total">
                    <div className="title">{type}</div>
                    <h2>{title}</h2>
                    <div className="desc">{description}</div>
                </div>
            </div>
        </>
    )

    const LinkLogic = () => {
        // If object has a link key...
        if (link_type && link) {
            // if link type is external, returns a href tag
            return (
                <SiteLink 
                    link={link}
                    type={link_type}
                    placeholder={cardComponent}
                />
            )
        }
        
        return cardComponent
    }


    return (
        <div className="picture-icon-card">
            {LinkLogic()}
        </div>
    )
}

export default PictureIconCard