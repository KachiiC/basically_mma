import React from 'react'
// COMPONENTS
import { Link } from "react-router-dom";
import SmallScreenSubList from './SmallSubList'
import TitleRender from 'SiteCss/SiteTitleRender'

interface menuProps {
    title: React.Key | null | undefined; 
    sub_menu: boolean;
} 

interface Props {
    click: any;
    data: any
}

const SmallMenuList = (props: Props) => {

    const displayMenuList = props.data.map((menu: menuProps) => {

        const menu_title = TitleRender(menu.title)

        const renderMenuType = menu.sub_menu === true ? 
            SmallScreenSubList(menu, props.click) : (
                <Link to={`/basically_mma/${menu.title}`} 
                    key={menu.title} 
                    onClick={props.click}
                >
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