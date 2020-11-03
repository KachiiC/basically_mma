import React from 'react'
// Components
import SiteNavbar from './BodyComponents/SiteNavbar';
import SiteFooter from './BodyComponents/SiteFooter';

const SiteBody = (props) => (
    <>
        <SiteNavbar />
            <div className="site-body">
                {props.children}
            </div>
        <SiteFooter />
    </>
)

export default SiteBody