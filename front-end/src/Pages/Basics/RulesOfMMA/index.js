import React from 'react'
// CSS
import './index.css'
// Components
import Introduction from './Tabs/Introduction'
import Tabs from './Tabs'
import MMANews from '../../../Components/SiteSidebar/MMANews'
import TwitterWidget from '../../../Components/SiteSidebar/TwitterWidget'
import MMAHighlights from '../../../Components/SiteSidebar/MMAHighlights'
import SiteSignature from '../../../Components/SiteSidebar/SiteSignature'


function RulesOfMMA () {

    return (
        <>
                <Introduction />
                <Tabs />
        </>
    )

}

export default RulesOfMMA