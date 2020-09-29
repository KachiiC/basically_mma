import React from 'react'
//CSS
import './index.css'
import {Col} from 'react-bootstrap'
//Components
import MMANews from './MMANews'
import TwitterWidget from './TwitterWidget'
import MMAHighlights from './MMAHighlights'

function SiteSidebar () {
    return (
        <Col>
            <MMAHighlights />
            <MMANews />
            <TwitterWidget />
        </Col>
    )
}
export default SiteSidebar