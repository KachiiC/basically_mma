import React from 'react'
// CSS

// Components
import {Link} from 'react-router-dom' 
import menuData from '../../Data/menuData'

function Menuright () {

    const topMenu = menuData.filter((menu) => {
        return menu.type === "menu"
    })

    const displayTopMenu = topMenu.map((menu) => {
        return (
            <div className="nav-item">
                <Link className="nav-link mx-auto" to={menu.link}>{menu.name}</Link>
            </div>
        )
    })

    return (
            <div className="navbar-nav nav-border navbar-section">
                {displayTopMenu}
            </div>
    )
}

export default Menuright