import React from 'react'
// CSS
import './index.css'
// Components
import {Link} from 'react-router-dom'
import SiteDropdown from './SiteDropdown'
import MenuRight from './menuright'

const SiteNavbar = () =>  {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light" id="mainNav">
            < SiteDropdown />  
            <div className="navbar-brand navbar-section">
                <Link path to="/">Basically MMA</Link>
            </div>
            < MenuRight />
        </nav>
    )
}

export default SiteNavbar;