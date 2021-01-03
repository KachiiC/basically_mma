import React from 'react' 
import PageData from 'Data/pagesData'

const SmallMenu = () => {

    const smallDisplayMenu = PageData.map((menu, index) => {
        return (
          <div key={index}>
            <div className="small-menu-nav">{menu.title}</div>
            <hr className="small-menu-divider"/>
          </div>
        )
      })

      return (
        <div className="small-menu-block">
            {smallDisplayMenu}
        </div>
      )
}
export default SmallMenu