import React from 'react'

const HomeFeaturedFighterData = (props) => {

    const fighterStatsData = [
        {
            heading:"MMA Record",
            content : props.mma_record
        },
        {
            heading: "Rank",
            content: props.rank
        },
        {
            heading:"Weight Class",
            content: props.weight_class
        },
        {
            heading:"Height",
            content: props.height
        },
        {
            heading:"Reach",
            content: props.reach
        },
        {
            heading: "Rank",
            content: props.rank
        },
        {
            heading:"Knockouts",
            content: props.wins_via_ko
        },
        {
            heading:"Submissions",
            content: props.wins_via_sub
        },
        {
            heading:"Decisions",
            content: props.wins_via_dec
        }
    ]

    const renderFighters = fighterStatsData.map(
        (fighter) => (
            <tr>
                <td className="fighter-table-title"><b>{fighter.heading}</b></td>
                <td>{fighter.content}</td>
            </tr>
        )
    )

    return renderFighters
}

export default HomeFeaturedFighterData