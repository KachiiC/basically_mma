import React from "react";
// Data
import FoulsData from "Data/Basics/RulesOfMMA/FoulsData"

const Fouls = () => {    

    const listOfFouls = FoulsData.map((foul) => (
            <li>{foul.name}</li>
        )
    )
    
    return (
        <>
            <p>These are the common fouls in Mixed Martial Arts:</p>
            <ul>
                {listOfFouls}
            </ul>
        </>
    )
}

 export default Fouls