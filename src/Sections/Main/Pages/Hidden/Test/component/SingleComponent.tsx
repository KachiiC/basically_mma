import SiteIcon from "Tools/SiteIcon"

// PROPS
const SingleComponent = (props: any) => {
    
    const {
        title,
        type,
        description,
        image,
        icon
    } = props

    const imageUrl = {
        "backgroundImage" : `url('${image}')`
    }

    return (
        <div className="test-card">
            <div className="img-avatar">
                <SiteIcon type={icon} color="black"/>
            </div>
            <div className="test-card-text">
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

export default SingleComponent