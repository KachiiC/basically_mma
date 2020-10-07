import React from 'react'
// CSS
import './index.css';
// Components
import Dictionary from './Dictionary'
import Introduction from './Introduction'
import SiteSignature from '../../../Components/SiteSidebar/SiteSignature'
import MMANews from '../../../Components/SiteSidebar/MMANews'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import TwitterWidget from '../../../Components/SiteSidebar/TwitterWidget'

function MMADictionary(props) {

    return (
        <div className="site-row">
            <div className="main-container">
                <Introduction />
                <Dictionary />
            </div>
            <div className="sidebar-container">
                <SiteSignature />
                <MMANews/>
                <MMAHighlights />
                <TwitterWidget />
            </div>
        </div>
        
    );
}

export default MMADictionary