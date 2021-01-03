import React from 'react'

const SiteMenuDropdown = (props) => {

    const displaySubMenu = props.submenu.map((menu) => {

        const menuName = menu.title.split("-").join(" ")
        
        return (
            <div className="site-nav-sub-menu-link">
                {menuName}
            </div>
        
        )
    })

    return (
        <>
            <div className="site-nav-dropdown-block">
                {props.title}
                    <div className="site-nav-dropdown-link">
                        {displaySubMenu}
                    </div>
            </div>
        </>
    )
}

export default SiteMenuDropdown