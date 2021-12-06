import SiteIcon from "Tools/SiteIcon"

interface PictureIconCardProps {
    description: string
    icon: string | undefined;
    image: string
    title: string
    type: string | undefined;
}

const PictureIconCard = (props: PictureIconCardProps) => {
    
    const {
        title,
        type,
        description,
        image,
        icon,
    } = props

    const imageUrl = {
        "backgroundImage" : `url('${image}')`
    }

    return (
        <div className="picture-icon-card">
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
        </div>
    )
}

export default PictureIconCard