// COMPONENTS
import SingleCard from "./components/SingleCard"
// CSS
import './SiteCard.css'
// PROPS
import { SiteCardProps } from 'Props/Components/CardProps'
// TOOLS
import { GridSpanSwitcher } from 'Tools/GridTools'
import PictureIconCard from "./components/PictureIconCard"

const SiteCards = (props: SiteCardProps) => {

    // PROPS
    const { card_size , data, type } = props
    
    const displayCards = data.map(card => {

        // PROPS
        const {
            description,
            image,
            link,
            link_type,
            title,
            icon
        } = card

        // CARD PROPS
        const CardProps = {
            title: title,
            description: description,
            image: image,
        }

        const singleCardProps = {
            link: link,
            link_type: link_type,
        }

        const pictureIconsCardProps = {
            icon: icon,
            type: card.type
        }

        const CardLogic = type === 'icons' ? 
            <PictureIconCard 
                {...CardProps} 
                {...pictureIconsCardProps}
            />
            :
            <SingleCard
                key={card.title}
                {...CardProps}
                {...singleCardProps}
            />

        return (
            // returns a card for each object in the array
            // Size of card can be passed through, default is "small" (4 cards a row)
            <div className={`site-col-${GridSpanSwitcher(card_size)}`}>
                {CardLogic}
            </div>
       )
    })

    return (
        <div className="site-grid-system">
            {displayCards}
        </div>
    )
}

export default SiteCards