import React from 'react'
// Data
import PageData from 'Data/pagesData'
import SiteMenuDropdown from './SiteMenuDropdown'
import SiteLogo from './SiteLogo'

const SiteMenu = (props) => {

    const dropdownList = PageData.filter((menu) => menu.sub_menu === true)
    const menuList = PageData.filter((menu) => menu.sub_menu === false)

    const displayMenuLeft = dropdownList.map((menu, index) => {

            return (
                <SiteMenuDropdown 
                    title={menu.title}
                    submenu={menu.menu_list}
                    key={index}
                /> 
            )
        
        }
    )

    const displayMenuRight = menuList.map((menu) => (
            <div className="site-nav-link">
                {menu.title}
            </div>
        )
    )

    return (
            <div className="topnav-container">
                <div className="topnav-section">
                    {displayMenuLeft}
                </div>
                <SiteLogo />
                <div className="topnav-section">
                    {displayMenuRight}
                </div>
                <div className="topnav-section">
                    {props.children}
                </div>
            </div>
    )
}
export default SiteMenu