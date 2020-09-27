import React from 'react';
//CSS 
import './index.css';
// Components
import footerData from '../../Data/footerData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SiteFooter(){

    const displayIcons = footerData.map((item) => {
        return (
            <a href={item.link} target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="footer-logos" size='4x' color={item.color} icon={item.icon}/> 
            </a>
        )
    })

    return (
        <footer>
            <div className="footer-items">
                {displayIcons}
            </div>
        </footer>
    )
}

export default SiteFooter;