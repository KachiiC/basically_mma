import React from 'react';
//CSS 
import './footer.css';
//Data
import footerData from 'Data/Other/footerData'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiteFooter = () => {

    const iconsList = footerData.map((item, index) => (
            <a href={item.link} target="_blank" rel="noreferrer noopener" key={index}>
                <FontAwesomeIcon 
                    className="footer-logos" 
                    size="4x"
                    color={item.color} 
                    icon={item.icon}
                /> 
            </a>
        )
    )

    return (
        <footer>
            <div className="footer-items">
                {iconsList}
            </div>
        </footer>
    )
}

export default SiteFooter;