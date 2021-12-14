// COMPONENTS
import SingleCard from "@components/SiteCards/components/SingleCard"
import SiteModal from "@components/SiteModal"
// DATA
import { FighterPayData } from "@data/Advanced/Pages/FighterPay"

const FighterPayCards = () => {

    const DisplayedCards = FighterPayData.map((card) => {

        const { description, title, image } = card

        const MoneyCard = (
            <div className="cursor-pointer">
                <SingleCard 
                    title={title} 
                    description={description} 
                    image={image}
                />
            </div>
        )

        return (
            <div className="site-col-6">
                <SiteModal 
                    component={MoneyCard} 
                    content={card.content}
                    type="modal" 
                />
            </div>
        )
    })

    return (
        <div className="site-grid-system">
            {DisplayedCards}
        </div>
    )
}

export default FighterPayCards