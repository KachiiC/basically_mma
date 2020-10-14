import React from 'react';
//Css
import './Techniques.css'
//Components
import TechniquesIntroduction from './Components/TechniquesIntroduction.js';
import TechniquesList from './Components/TechniquesList'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong'


const Techniques = () => (
        <div className="site-row">
            <div className="main-container">
                <TechniquesIntroduction />
                <TechniquesList />
            </div>
            <SiteSidebarLong />
        </div>
    )

export default Techniques