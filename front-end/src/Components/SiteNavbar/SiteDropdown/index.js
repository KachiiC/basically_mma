import React from 'react'
// CSS
// Components
import Basic from './basic'
import Advanced from './advanced'
import MMAWorld from './mmaworld'

function Dropdown (){

    return(
        <div className="navbar-nav navbar-section">
            <Basic />
            <Advanced />
            <MMAWorld />
        </div>
    )
}
export default Dropdown