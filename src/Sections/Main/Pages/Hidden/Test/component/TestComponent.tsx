// COMPONENTS
import TestCard from "./TestCard"
// TOOLS
import { TitleTrimmer } from "Tools/StringTools"

const TestComponent = (props: {data: any[]}) => {

    const displayCards = props.data.map((card) => (
        <TestCard
            date={card.post_time_stamp}
            image={card.thumbnail_url}
            title ={TitleTrimmer(card.title, 60)}
            description={card.post_description}
        />
    )).slice(0, 6)
    
    return (
        <div className="gridywrap">
            {displayCards}
        </div>
    )
}

export default TestComponent