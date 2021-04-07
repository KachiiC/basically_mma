import React from 'react'
// DATA
import menuData from 'Data/pagesData'
// COMPONENTS
import DropdownList from './Dropdown'
import TitleRender from 'SiteCss/SiteTitleRender'
import {Link} from "react-router-dom";

const MenuList = () => {

    const Menu = menuData.map((menu, index) => {
        
        const menu_column = menuData.length/menuData.length

        const renderMenuType = menu.sub_menu === true ? 
        DropdownList(menu) : TitleRender(menu.title)

        return (
        <div key={index} className={`site-span-${menu_column} nav-heading`}>
            <Link to={`/basically_mma/${menu.title}`}>
                {renderMenuType}
            </Link>
        </div>
        )
        
    })

    const gridNumber = menuData.length

    return (
        <div className="nav-menu-list site-grid-system"
            style={{"gridTemplateColumns": `repeat(${gridNumber},1fr)`}}
        >
            {Menu}
        </div>
    )
}

export default MenuList