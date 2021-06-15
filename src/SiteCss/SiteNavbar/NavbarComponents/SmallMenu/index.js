import React, { useState } from 'react'
// DATA
import SmallMenuList from './SmallMenuList'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SmallMenu = (props) => {

    const [menuList, setMenuList] = useState(false)

    const handleMenuList = () => !menuList ? setMenuList(true) : setMenuList(false)

    return (
        <>
            <div className="small-menu-container">
                <div className="small-menu-button" onClick={handleMenuList}>
                    <FontAwesomeIcon icon={faBars} /> MENU
                </div>
            </div>
            {menuList && 
                <SmallMenuList 
                    click={handleMenuList} 
                    data={props.data}
                />
            }
        </>
    )
}

export default SmallMenu