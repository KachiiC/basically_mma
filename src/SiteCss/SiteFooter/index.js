import React from 'react';
//CSS 
import './footer.css';
//Data
import footerData from 'Data/Other/Footer/footerData'
// Components
// import FooterInstaSlider from 'SiteCss/SiteFooter/FooterInstaSlider';
import FooterIcons from './FooterComponents/FooterIcons';

const SiteFooter = () => (

    <footer>
        {/* <FooterInstaSlider /> */}
        <div className="footer-items">
            <FooterIcons data={footerData} />
        </div>
    </footer>

)

export default SiteFooter;