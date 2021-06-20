import React from 'react'
// COMPONENTS
import TitleRender from 'SiteTools/SiteTitleRender'
import {Link} from "react-router-dom";

interface menuProps {
    title: string | null | undefined;
}

interface Props {
    title: any;
    menu_list?: any;
}

const DropdownList = (props: Props) => {

    const displayList = props.menu_list.map((sub: menuProps) => {

        const displayTitle = TitleRender(sub.title)

        return (
            <Link to={`/basically_mma/${sub.title}`} 
                key={sub.title}
            >
                <h6>{displayTitle}</h6>
            </Link>
        )
    })

    const dropdown_title = TitleRender(props.title)

    return (
        <>
            {dropdown_title}
            <div className="nav-sub-menu">
                {displayList}
            </div>
        </>
    )
  }

export default DropdownList