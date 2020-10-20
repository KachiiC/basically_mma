import React from 'react'
// CSS
// Components
import {Link} from 'react-router-dom' 
import menuData from '../../Data/Other/menuData'

const Menuright = () =>  {

    const topMenu = menuData.filter((menu) => {
        return menu.type === "menu"
    })

    const displayTopMenu = topMenu.map((menu, index) => {
        return (
            <div className="nav-item" key={index}>
                <Link className="nav-link mx-auto" to={menu.link}>
                    {menu.name}
                </Link>
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