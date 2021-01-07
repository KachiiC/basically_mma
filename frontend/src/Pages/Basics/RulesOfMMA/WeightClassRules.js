import React from 'react'
// Components
import WeightTable from 'Pages/Advanced/WeightClasses/PageComponents/WeightTable'
import {Link} from 'react-router-dom'

const WeightClassRules = () => ( 
    
    <div>
        <h3>MMA Weight Classes</h3>
        <p>Although some organisations choose to use their own weight classes, these are 
            the weight classes used by the majority promotions in sanctioned bouts. 
            Some bout may be contested in a catchweight, either because one fighter has 
            missed weight or the bout is on short notice. More details regarding weight classes 
            can be found <Link to="/weight-classes">here.</Link>
            <div className="rules-weight-container">
                <WeightTable />
            </div>
        </p>
    </div>
)

export default WeightClassRules