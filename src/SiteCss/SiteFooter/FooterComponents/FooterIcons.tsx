import React from 'react'
// COMPONENTS
import SiteExternalLink from 'SiteTools/SiteExternalLink/index.d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface itemProps {
    link: string;
    color: string;
    icon: any;
}

interface footerProps {
    data: itemProps[]
}

const FooterIcons = (props: footerProps) => {

    return props.data.map((item: itemProps) => (

        <SiteExternalLink url={item.link} key={item.icon}>
            <FontAwesomeIcon 
                className="footer-logos" 
                size="4x"
                color={item.color} 
                icon={item.icon}
            /> 
        </SiteExternalLink>
    ))
}

export default FooterIcons