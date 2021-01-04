import React from 'react' 
// Data
import PageData from 'Data/pagesData'
// Component
import { Link } from 'react-router-dom'

const SmallMenu = (props) => {
  
  const smallDropdownMenus = PageData.filter((menu) => menu.sub_menu === true)
  const smallSingleMenus = PageData.filter((menu) => menu.sub_menu === false)
  
  const displayedSmallDropdowns = smallDropdownMenus.map((menu, index) => {
      const smallSubmenu = menu.menu_list.map((sub, index) => {

        const renderSubTitle = sub.title.split("-").join(" ")
        return (
          <div className="small-menu-nav-dropdown-link" key={index}>
            <Link to={`${sub.title}`} onClick={props.function}>
              {renderSubTitle}
            </Link>
          </div>
        )
      })

      const renderDisplayTitle = menu.title.split("-").join(" ")

      return (
        <div className="small-menu-nav-dropdown" key={index}>
          {renderDisplayTitle}
          <div className="small-menu-nav-dropdown-block">
            {smallSubmenu}
          </div>
        </div>
      )
  })


  const smallDisplayMenu = smallSingleMenus.map((menu, index) => {

    const renderDisplayTitle = menu.title.split("-").join(" ")

    return (
      <div className="small-menu-nav" key={index}>
        <Link to={`${menu.title}`} onClick={props.function}>
          {renderDisplayTitle}
        </Link>
      </div>
    )
  })



  return (
    <div className="small-menu-block">
        {displayedSmallDropdowns}
        {smallDisplayMenu}
    </div>
  )

}
export default SmallMenu