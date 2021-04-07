import React from 'react'
// COMPONENTS
import TitleRender from 'SiteCss/SiteTitleRender'
import {Link} from "react-router-dom";

const SmallScreenSubList = (props, click) => {

    const displaySubList = props.menu_list.map((sub, index) => {
        const displaySub = TitleRender(sub.title)

        return (
            <Link to={`/basically_mma/${sub.title}`} 
                onClick={click}
            >
                <h5>{displaySub}</h5>
            </Link>
        )
    })

    const displayTitle = TitleRender(props.title)
    return (
        <>
            <h4>{displayTitle}</h4>
            {displaySubList}
        </>
    )
}

export default SmallScreenSubList
