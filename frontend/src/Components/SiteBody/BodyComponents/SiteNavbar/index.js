import React, {useState} from 'react'
// CSS
import './SiteNavbar.css'
// Components
import SiteMenu from './SiteMenu'
import SiteMenuSmall from './SiteMenuSmall'
// import { Link } from 'react-router-dom'
// import SiteDropdown from './SiteDropdown'
// import MenuRight from './menuright'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SiteNavbar = () =>  {

    const [smallMenu, setSmallMenu] = useState(false)

    const myFunction = () => {
      smallMenu === false ? setSmallMenu(true): setSmallMenu(false)
    }
  
    return (
      <>
        <div className="topnav" id="myTopnav">
            <SiteMenu>
              <div className="icon" onClick={myFunction}>
                Menu <FontAwesomeIcon icon={faBars} />
              </div>
            </SiteMenu>
        </div>
        { 
          smallMenu && (
              <SiteMenuSmall />
          )
        }
      </>
    )
    
}


export default SiteNavbar;