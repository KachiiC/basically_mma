import React from 'react'
// CSS
import './SiteOverlay.css'

interface Props {
    icon?: any;
    click?: any;
    children: any;
}

const SiteOverlay = (props: Props) => {

    const iconLogic = () => {
        if (props.icon) {
            return (
                <div className="overlay-icon">
                    {props.icon}
                </div>
            )
        } 
    }
    
    return (
        <div className="site-overlay-pic cursor-pointer" 
            onClick={props.click}
        >
            {iconLogic ()}
            {props.children}
        </div>
    )

}
export default SiteOverlay