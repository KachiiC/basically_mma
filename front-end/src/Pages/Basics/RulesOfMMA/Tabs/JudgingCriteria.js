import React from "react";

function JudgingCriteria(){
    return (
        <>
        <h3>Method</h3>
        <p>
            The ten-point must system is used for all fights. Three judges score each 
            round with ten points to the winner and nine points or fewer to the other fighter, 
            the fewest points a fighter can receive is 7. If the round is even, both fighters 
            receive ten points. Penalty points (usually one point for each offence, occasionally 
            two points) decided by the referee are deducted from each judge's score for that round 
            for the offending fighter.
        </p>
        <p>
            At the end of the fight, each judge submits their total score for all rounds for each 
            fighter, to determine the result by the following criteria.</p>
        <ul className="mb-30">
            <li>Unanimous decision win: All three judges have the same fighter as the winner.</li>
            <li>Majority decision win: Two judges have one fighter winning the fight and the third judge scores it a draw.</li>
            <li>Split decision win: Two judges have one fighter winning the fight and the third judge has the other fighter winning it.</li>
            <li>Unanimous draw: All three judges score it a draw.</li>
            <li>Majority draw: Two judges score it a draw, and the third judge has a winner.</li>
            <li>Split draw: One judge scores it a draw, and the other two judges have different winners.</li>
        </ul>
        </>
    )
}

 export default JudgingCriteria;