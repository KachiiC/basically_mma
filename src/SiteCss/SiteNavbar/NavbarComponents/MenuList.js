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

        const regular_menu = 
        <Link to={`/basically_mma/${menu.title}`}>
            {TitleRender(menu.title)}
        </Link>

        const renderMenuType = menu.sub_menu === true ? 
        DropdownList(menu) : regular_menu

        return (
            <div key={index} className={`site-span-${menu_column} nav-heading`}>
                {renderMenuType}
            </div>
        )
        
    })

    const gridNumber = menuData.length

    return (
        <div className="nav-menu-list site-grid-system w-70"
            style={{"gridTemplateColumns": `repeat(${gridNumber},1fr)`}}
        >
            {Menu}
        </div>
    )
}

export default MenuList