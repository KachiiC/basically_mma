import React, {useState} from 'react'
// CSS
import './SiteNavbar.css'
// Components
import SiteMenu from './SiteMenu'
import SiteMenuSmall from './SiteMenuSmall'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SiteNavbar = () =>  {

    const [smallMenu, setSmallMenu] = useState(false)

    const myFunction = () => {
      smallMenu === false ? setSmallMenu(true): setSmallMenu(false)
    }
  
    return (
      <nav>
        <div className="topnav" id="myTopnav">
            <SiteMenu>
              <div className="icon" onClick={myFunction} >
                Menu <FontAwesomeIcon icon={faBars}/>
              </div>
            </SiteMenu >
        </div>
        { 
          smallMenu && (
              <SiteMenuSmall function={myFunction} />
          )
        }
      </nav>
    )
    
}


export default SiteNavbar;