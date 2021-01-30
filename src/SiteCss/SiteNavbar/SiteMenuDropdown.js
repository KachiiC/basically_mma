import React from 'react'
// Components
import { Link } from "react-router-dom";

const SiteMenuDropdown = (props) => {

    const displaySubMenu = props.submenu.map((menu, index) => {

        const menuName = menu.title.split("-").join(" ")
        
        return (
            <div className="site-nav-sub-menu-link" key={index}>
                <Link to={`/basically_mma/${menu.title}`} onClick={props.function}>
                    {menuName}
                </Link>
            </div>
        
        )
    })
    
    const displaySubMenuTitle = props.title.split("-").join(" ")

    return (
        <>
            <div className="site-nav-dropdown-block">
                {displaySubMenuTitle}
                    <div className="site-nav-dropdown-link">
                        {displaySubMenu}
                    </div>
            </div>
        </>
    )
}

export default SiteMenuDropdown