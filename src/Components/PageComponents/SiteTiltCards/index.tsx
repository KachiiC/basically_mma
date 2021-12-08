// COMPONENT
import SingleTiltCard from './components/SingleTiltCard'
// CSS
import './SiteTiltCards.css'
// PROPS
import { SiteTiltCardsProps } from 'Props/SiteProps/TiltCardProps'

const SiteTiltCards = (props: SiteTiltCardsProps) => {

    const displayTiltCards = props.data.map((card) => {

        const {
            content,
            image,
            name,
            type
        } = card

        const cardProps = {
            content: content,
            image: image,
            name: name,
            type: type
        }

        return <SingleTiltCard {...cardProps} />
        
    })

    return (
        <div className="site-tilt-cards">
            {displayTiltCards}
        </div>
    )
}

export default SiteTiltCards