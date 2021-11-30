// PROPS
import { TimelineEventProps } from "Props/Components/TimlineProps"

const TimelineEvent = (props: TimelineEventProps) => {

    // PROPS
    const { description, event, year } = props

    return (
        <div className="timeline-container">
            <div className="timeline-content site-border">
                <h3>{year}</h3>
                <h3>{event}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TimelineEvent