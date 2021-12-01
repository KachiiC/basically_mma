// CSS
import './SitePopUpCard.css'
// PROPS
import { SitePopUpCardProps } from "Props/SiteProps/SitePopUpCardProps"

const SitePopUpCard = (props: SitePopUpCardProps) => {

    const { description, image, title } = props

    const PopUpCard = {
        "backgroundImage": `url(${image})`
    }

    return (
        <div className='popup-card site-shadow' 
            style={PopUpCard}
        >
            <div className='popup-info'>
                <h1 className='popup-title'>
                    {title}
                </h1>
                <p className='popup-description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SitePopUpCard