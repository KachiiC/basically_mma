import React from 'react'
// CSS
import './MMADictionary.css';
// Components
import Dictionary from './Components/Dictionary'
import Introduction from './Components/MMADictionaryIntroduction'
import SiteSidebarLong from '../../../Components/SiteSidebar/SiteSidebarLong';

const MMADictionary = () => (
    
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Dictionary />
            </div>
            <SiteSidebarLong videos="8" news="5"/>
        </div>
        
);

export default MMADictionary