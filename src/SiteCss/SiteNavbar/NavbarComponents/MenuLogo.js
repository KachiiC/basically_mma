import React from 'react'
import {Link} from "react-router-dom"

const MenuLogo = (props) => (

    <div className="nav-logo m-auto text-auto w-30 h-100">
        <Link to="/">
            <h1>{props.title}</h1>
        </Link>
    </div>

)

export default MenuLogo