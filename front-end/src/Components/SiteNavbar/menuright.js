import React from 'react'
// CSS
import {Col} from 'react-bootstrap'
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
        <Col xs={4}>
            <div className="navbar-nav nav-border">
                {displayTopMenu}
            </div>
        </Col>
    )
}

export default Menuright