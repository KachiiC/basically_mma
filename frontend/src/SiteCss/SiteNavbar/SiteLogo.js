import React from 'react'
// Components
import { Link } from 'react-router-dom'

const SiteLogo = () => {

    return (
        <div className="site-logo">
            <Link to="/">
                Basically MMA
            </Link>
        </div>
    )
}

export default SiteLogo