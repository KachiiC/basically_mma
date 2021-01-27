import React from 'react';
//CSS 
import './footer.css';
//Data
import footerData from 'Data/Other/footerData'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterInstaSlider from 'SiteCss/SiteFooter/FooterInstaSlider';
import SiteExternalLink from '../SiteExternalLink';

const SiteFooter = () => {

    const iconsList = footerData.map((item, index) => (

            <SiteExternalLink href={item.link} key={index}>
                <FontAwesomeIcon 
                    className="footer-logos" 
                    size="4x"
                    color={item.color} 
                    icon={item.icon}
                /> 
            </SiteExternalLink>
        )
    )

    return (
        <footer>
            <FooterInstaSlider />
            <div className="footer-items">
                {iconsList}
            </div>
        </footer>
    )
}

export default SiteFooter;