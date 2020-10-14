import React from 'react';
//CSS 
import './footer.css';
// Components
import footerData from '../../Data/Other/footerData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiteFooter = () => {

    const displayIcons = footerData.map((item) => (
            <a href={item.link} target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="footer-logos" size='4x' color={item.color} icon={item.icon}/> 
            </a>
        )
    )

    return (
        <footer>
            <div className="footer-items">
                {displayIcons}
            </div>
        </footer>
    )
}

export default SiteFooter;