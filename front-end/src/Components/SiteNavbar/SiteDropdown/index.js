import React from 'react'
// CSS
import {Col} from 'react-bootstrap'
// Components
import Basic from './basic'
import Advanced from './advanced'
import MMAWorld from './mmaworld'

function Dropdown (){

    return(

        <Col xs={4}>
            <div className="navbar-nav">
                <Basic />
                <Advanced />
                <MMAWorld />
            </div>
        </Col>

    )
}
export default Dropdown