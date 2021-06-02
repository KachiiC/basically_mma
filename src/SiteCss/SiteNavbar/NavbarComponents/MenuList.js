import React from 'react'
// DATA
// COMPONENTS
import DropdownList from './Dropdown'
import TitleRender from 'SiteCss/SiteTitleRender'
import {Link} from "react-router-dom";

const MenuList = (props) => {

    const ListOfMenu = props.data.map((menu, index) => {

        const regular_menu = 
        <Link to={`/basically_mma/${menu.title}`}>
            {TitleRender(menu.title)}
        </Link>

        const renderMenuType = menu.sub_menu === true ? 
            DropdownList(menu): 
            regular_menu

        return (
            <div key={index} className={`site-span-1 nav-heading`}>
                {renderMenuType}
            </div>
        )
    })

    return (
        <div className="nav-menu-list site-grid-system w-70"
            style={{"gridTemplateColumns": `repeat(${props.data.length},1fr)`}}
        >
            {ListOfMenu}
        </div>
    )
}

export default MenuList