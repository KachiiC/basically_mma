import React from 'react';
//Css
import './index.css'
//Components
import Introduction from './Introduction.js';
import TechniquesList from './TechniquesList'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const Techniques = () => (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <TechniquesList />
            </div>
            <SiteSidebarLong />
        </div>
    )

export default Techniques