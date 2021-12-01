import SiteHighlightHeading from "Components/PageComponents/SiteHighlightHeading"
import { FighterDataProps } from "Props/SiteProps/FighterDataProps"
import { SiteLink } from "Tools/LinkTools"

interface FighterRankingProps { 
    data: FighterDataProps[]
}

const FighterRankings = (props: FighterRankingProps) => {

    const rankings = props.data.map(fighter => {

        const { link, name, rank } = fighter

        const rankLogic = rank === 0 ? "C" : rank

        const placeholder = (
            <SiteHighlightHeading
                title={`${rankLogic} - ${name}`} 
            />
        )
    
        return (
            <SiteLink
                link={link}
                placeholder={placeholder} 
                type="external"
            />
        )
    })

    return <>{rankings}</>

}

export default FighterRankings