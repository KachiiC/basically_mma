import React from 'react'
// CSS
import './index.css';
// Components
import Dictionary from './Dictionary'
import Introduction from './Introduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong';

function MMADictionary(props) {

    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Dictionary />
            </div>
            <SiteSidebarLong />
        </div>
        
    );
}

export default MMADictionary