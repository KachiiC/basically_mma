import React from 'react'
// CSS
import './index.css'
import {Col} from 'react-bootstrap'
// Components
import {Link} from 'react-router-dom'
import SiteDropdown from './SiteDropdown'
import MenuRight from './menuright'

function SiteNavbar () {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="mainNav">
            < SiteDropdown />  
            <Col xs={4}>
                <div className="navbar-brand">
                    <Link path to="/">Basically MMA</Link>
                </div>
            </Col>
            < MenuRight />
        </nav>
    )
}

export default SiteNavbar;