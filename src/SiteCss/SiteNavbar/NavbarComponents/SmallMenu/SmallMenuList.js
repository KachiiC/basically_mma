import React from 'react'
import {Link} from "react-router-dom";
// DATA
import menuData from 'Data/pagesData'
// COMPONENTS
import SmallScreenSubList from './SmallSubList'
import TitleRender from 'SiteCss/SiteTitleRender'

const SmallMenuList = (props) => {

    const displayMenuList = menuData.map((menu, index) => {

        const menu_title = TitleRender(menu.title)

        const renderMenuType = menu.sub_menu === true ? 
            SmallScreenSubList(menu, props.click) : (
                <Link to={`/basically_mma/${menu.title}`} key={index}>
                    <h4>{menu_title}</h4>
                </Link>
            )

        return renderMenuType
    })


    return (
        <div className="small-menu-block">
            {displayMenuList}
        </div>
    )
}

export default SmallMenuList