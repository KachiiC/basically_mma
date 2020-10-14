import React from 'react'
// Components
import {Link} from 'react-router-dom'
import menuData from '../../../Data/menuData'

const Advanced = () => {

    const advanced = menuData.filter((menu) => {
        return menu.type === "advanced"
    })

    const displayAdvanced = advanced.map((advance) => {
        return (
            <Link className="dropdown-item" to={advance.link}>{advance.name}</Link>
        )
    })

    return (
        <div className="nav-item dropdown">
            <div className="nav-link" id="navbarDropdown" data-toggle="dropdown">
                Advanced
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {displayAdvanced}
            </div>
        </div>
    )
}
export default Advanced