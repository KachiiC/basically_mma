import React from 'react'
// Components
import {Link} from 'react-router-dom'
import menuData from '../../../Data/menuData'

function MMAWorld () {

    const mmaworld = menuData.filter((menu) => {
        return menu.type === "MMA World"
    })

    const displayMmaworld = mmaworld.map((mma) => {
        return (
            <Link className="dropdown-item" to={mma.link}>{mma.name}</Link>
        )
    })

    return (
        <div className="nav-item dropdown">
            <div className="nav-link" id="navbarDropdown" data-toggle="dropdown">
                MMA WORLD
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {displayMmaworld}
            </div>
        </div>
    )
}
export default MMAWorld