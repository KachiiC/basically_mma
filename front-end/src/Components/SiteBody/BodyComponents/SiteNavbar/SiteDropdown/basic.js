import React from 'react'
// Components
import {Link} from 'react-router-dom'
import menuData from 'Data/Other/menuData'

const Basic = () => {

    const basics = menuData.filter((menu) => {
        return menu.type === "basic"
    })

    const displayBasics = basics.map((basic, index) => {

        return (

            <Link className="dropdown-item" to={basic.link} key={index}>
                {basic.name}
            </Link>

        )
    })

    return (

        <div className="nav-item dropdown">
            <div className="nav-link" id="navbarDropdown" data-toggle="dropdown">
                Basics
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {displayBasics}
            </div>
        </div>
        
    )
}
export default Basic