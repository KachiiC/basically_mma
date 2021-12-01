// COMPONENT
import SingleTiltCard from './components/SingleTiltCard'
// CSS
import './SiteTiltCards.css'
// PROPS
import { SiteTiltCardsProps } from 'Props/SiteProps/TiltCardProps'

const SiteTiltCards = (props: SiteTiltCardsProps) => {

    const displayTiltCards = props.data.map((card) => {

        const {
            name,
            type,
            image,
            content
        } = card

        const cardProps = {
            name: name,
            type: type,
            image: image,
            content: content
        }

        return (
            <SingleTiltCard {...cardProps} />
        )
    })

    return (
        <div className="site-tilt-cards">
            {displayTiltCards}
        </div>
    )
}

export default SiteTiltCards