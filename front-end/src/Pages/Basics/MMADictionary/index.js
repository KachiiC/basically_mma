import React from 'react'
// CSS
import './index.css';
// Components
import Dictionary from './Dictionary'
import Introduction from './Introduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong';

const MMADictionary = () => (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Dictionary />
            </div>
            <SiteSidebarLong />
        </div>
        
    );

export default MMADictionary