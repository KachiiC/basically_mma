import React, {useState} from 'react'
// COMPONENTS
import { Link } from "react-router-dom";
import TitleRender from 'SiteCss/SiteTitleRender'

interface subMenuProps {
    title: string; 
}

interface Props {
    title: string;
    menu_list?: any;
}

const SmallScreenSubList = (props: Props, click: React.MouseEventHandler<HTMLAnchorElement> | undefined) => {

    const [subList, setSubList] = useState(false)

    const displaySubList = props.menu_list.map((sub: subMenuProps) => {
        
        const displaySub = TitleRender(sub.title)

        return (
            <Link to={`/basically_mma/${sub.title}`} 
                onClick={click}
                key={sub.title}
            >
                <h5>{displaySub}</h5>
            </Link>
        )
    })

    const displayTitle = TitleRender(props.title)

    const handleClick = () => subList === false ? 
        setSubList(true) 
        : 
        setSubList(false)

    return (
        <>
            <h4 onClick={handleClick}>{displayTitle}</h4>
            {subList && displaySubList}
        </>
    )
}

export default SmallScreenSubList