import React from 'react'

const HomeFeaturedFighterData = (props) => {

    const fighterStatsData = [
        {
            heading: "Promotion",
            content : props.promotion
        },
        {
            heading:"Height",
            content: props.height
        },
        {
            heading:"Weight",
            content: props.weight_class
        },
        {
            heading:"Reach",
            content: props.reach
        },
        {
            heading:"Style",
            content: props.style
        },
        {
            heading:"MMA Record",
            content : props.mma_record
        },
        {
            heading:"Knockouts",
            content: props.wins_via_knockout
        },
        {
            heading:"Submissions",
            content: props.wins_via_submission
        }
    ]

    const renderFighters = fighterStatsData.map(
        (fighter) => (
            <tr>
                <td className="featured-fighter-table-title"><b>{fighter.heading}</b></td>
                <td>{fighter.content}</td>
            </tr>
        )
    )

    return renderFighters
}

export default HomeFeaturedFighterData