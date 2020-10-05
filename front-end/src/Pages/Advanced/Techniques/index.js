import React from 'react';
//Css
import './index.css'
//Components
import Introduction from './Introduction.js';
import TechniquesList from './TechniquesList'
import SiteSignature from '../../../Components/SiteSidebar/SiteSignature'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import MMANews from '../../../Components/SiteSidebar/MMANews'


function Techniques() {
    
    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <TechniquesList />
            </div>
            <div className="sidebar-container">
                <SiteSignature />
                <MMAHighlights />
                <MMANews />
            </div>
        </div>
    );
}

export default Techniques